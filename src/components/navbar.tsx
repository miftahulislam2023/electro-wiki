import { auth } from "@/auth";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BookOpen, Settings, User, Zap } from "lucide-react";

export default async function Navbar() {
    const session = await auth()

    const getUserInitials = (name: string) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <nav className="mx-5 sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <div className="mr-6 flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="hidden font-bold sm:inline-block">
                        ElectroWiki
                    </span>
                </div>
                <div className="mr-4 hidden md:flex">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <BookOpen className="h-4 w-4" />
                        Wiki
                    </Button>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    {session?.user ? (
                        <div className="flex items-center gap-2">
                            <span className="hidden text-sm text-muted-foreground md:inline-block">
                                Welcome back!
                            </span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        {session.user.name ? getUserInitials(session.user.name) : "U"}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {session.user.name}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {session.user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <div className="w-full">
                                            <SignOut />
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <SignIn />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}