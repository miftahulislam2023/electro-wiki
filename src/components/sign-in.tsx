
import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <Button type="submit" variant="default" className="gap-2">
                <LogIn className="h-4 w-4" />
                Sign in with Google
            </Button>
        </form>
    )
} 