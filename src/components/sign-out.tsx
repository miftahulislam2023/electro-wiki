import { signOut } from "@/auth"
import { LogOut } from "lucide-react"

export default function SignOut() {
    return (
        <form action={async () => {
            "use server"
            await signOut()
        }} className="w-full">
            <button
                type="submit"
                className="flex w-full items-center gap-2 px-0 py-0 text-sm hover:bg-transparent focus:bg-transparent"
            >
                <LogOut className="h-4 w-4" />
                Sign Out
            </button>
        </form>
    )
} 