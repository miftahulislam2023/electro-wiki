"use client";
import Form from 'next/form'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Bot, Send, Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

export function FloatingAI() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai', content: string }>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState('');

    const handleSubmit = async (formData: FormData) => {
        const userPrompt = formData.get('prompt-text') as string;
        if (!userPrompt?.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { type: 'user', content: userPrompt }]);
        setIsLoading(true);
        setPrompt(''); // Clear the textarea

        try {
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userPrompt }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get AI response');
            }

            // Add AI response
            setMessages(prev => [...prev, { type: 'ai', content: data.response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                type: 'ai',
                content: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button
                        size="lg"
                        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                        <Bot className="h-6 w-6" />
                        <span className="sr-only">Open AI Assistant</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] max-h-[600px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            AI Assistant
                        </DialogTitle>
                        <DialogDescription>
                            Ask me anything about the content on this wiki.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto space-y-4 max-h-[300px] p-2">
                        {messages.length === 0 ? (
                            <div className="text-center text-gray-500 py-8">
                                <Bot className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p>Start a conversation with the AI assistant!</p>
                            </div>
                        ) : (
                            messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${message.type === 'user'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 text-gray-900 border'
                                            }`}
                                    >
                                        <p className="text-sm">{message.content}</p>
                                    </div>
                                </div>
                            ))
                        )}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-900 border rounded-lg p-3 max-w-[80%]">
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span className="text-sm">AI is thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Form */}
                    <div className="border-t pt-4">
                        <Form action={handleSubmit} className="flex gap-2">
                            <Textarea
                                name="prompt-text"
                                placeholder="Ask me anything..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="flex-1 min-h-[44px] resize-none"
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                disabled={isLoading || !prompt.trim()}
                                size="sm"
                                className="self-end"
                            >
                                {isLoading ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Send className="h-4 w-4" />
                                )}
                            </Button>
                        </Form>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}