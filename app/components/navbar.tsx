// app/components/navbar.tsx

"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/components/hooks/use-mobile";
import { ModeToggle } from "./mode-toggle";

const AppIcon = React.memo(() => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-brain w-6 h-6 sm:w-7 sm:h-7 text-white"
        >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
            <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
            <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
            <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
        </svg>
    );
})

const Navbar = () => {
    const isMobile = useIsMobile();
    return (
        <NavigationMenu viewport={isMobile} className="border-b-2">
            <NavigationMenuList className="w-screen px-5 lg:px-40 py-5 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-linear-to-br from-violet-800 to-violet-500 w-10 h-10 sm:w-12 sm:h-12 flex flex-row justify-center items-center rounded-lg">
                        <AppIcon />
                    </div>
                    <div>
                        <h2 className="m-0 font-bold text-xl sm:text-2xl">MindScribe</h2>
                        <span className="hidden sm:block text-sm">AI Powered Note Taking</span>
                    </div>
                </div>
                <ModeToggle />
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
