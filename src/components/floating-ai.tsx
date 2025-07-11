import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import Link from "next/link";

export function FloatingAI() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link href="/https://electro-wiki-chatbot.vercel.app/">
                <Button
                    size="lg"
                    className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                    <Bot className="h-6 w-6" />
                    <span className="sr-only">Open AI Assistant</span>
                </Button>
            </Link>
        </div>
    );
}