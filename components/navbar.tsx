"use client";

import { Sign } from "crypto";
import {  ArrowRight, Trello } from "lucide-react";
import { SignInButton, SignOutButton, useClerk, SignUpButton, UserButton} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const { user, isSignedIn } = useClerk();
    const pathname = usePathname();

    const isDashboardPage = pathname === "/dashboard";
    const isBoardPage = pathname.startsWith("/boards/");

    if (isDashboardPage){
       
    }

   return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          
            <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Trello  className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600"/>
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">Trello Clone</span>
                </div>
                <div className="flex items-center space-x-4">
                    <UserButton />
                </div>              
            </div>
        </header>
      );
}