import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { auth } from '@/auth';

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const session = await auth();

        if (!session || !session.user) {
            return NextResponse.json(
                { error: 'Authentication required' },
                { status: 401 }
            );
        }

        // Parse request body
        const body = await request.json();
        const { prompt } = body;

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { error: 'Prompt is required and must be a string' },
                { status: 400 }
            );
        }

        if (prompt.trim().length === 0) {
            return NextResponse.json(
                { error: 'Prompt cannot be empty' },
                { status: 400 }
            );
        }

        if (prompt.length > 2000) {
            return NextResponse.json(
                { error: 'Prompt is too long. Maximum 2000 characters allowed.' },
                { status: 400 }
            );
        }

        // Check for API token
        if (!process.env.OPENAI_API_KEY) {
            console.error('OPENAI_API_KEY is not configured');
            return NextResponse.json(
                { error: 'AI service is not properly configured' },
                { status: 500 }
            );
        }

        // Call OpenAI API
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are an AI assistant for Electro Wiki, a helpful and knowledgeable assistant that helps users with electronic and technical questions. Please provide accurate, helpful, and concise responses.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: 300,
            temperature: 0.7,
        });

        // Extract the generated text from OpenAI response
        let aiResponse = response.choices[0]?.message?.content || '';

        // Clean up the response
        if (aiResponse) {
            // Remove any unwanted prefixes
            aiResponse = aiResponse.replace(/^(Assistant:|AI:|Response:|Answer:)/i, '').trim();

            // Ensure response is not empty
            if (!aiResponse) {
                aiResponse = "I understand your question, but I'm having trouble generating a response right now. Could you please rephrase your question?";
            }
        } else {
            aiResponse = "I'm sorry, but I couldn't generate a response to your question. Please try again with a different prompt.";
        }

        return NextResponse.json({
            response: aiResponse,
            timestamp: new Date().toISOString(),
            user: session.user.email
        });

    } catch (error) {
        console.error('AI API Error:', error);

        // Handle specific error types
        if (error instanceof Error) {
            if (error.message.includes('rate limit') || error.message.includes('quota')) {
                return NextResponse.json(
                    { error: 'AI service is currently at capacity. Please try again in a few moments.' },
                    { status: 429 }
                );
            }

            if (error.message.includes('timeout')) {
                return NextResponse.json(
                    { error: 'Request timed out. Please try again with a shorter prompt.' },
                    { status: 408 }
                );
            }
        }

        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}

// Handle unsupported methods
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed. Use POST to interact with the AI.' },
        { status: 405 }
    );
}

export async function PUT() {
    return NextResponse.json(
        { error: 'Method not allowed. Use POST to interact with the AI.' },
        { status: 405 }
    );
}

export async function DELETE() {
    return NextResponse.json(
        { error: 'Method not allowed. Use POST to interact with the AI.' },
        { status: 405 }
    );
} 