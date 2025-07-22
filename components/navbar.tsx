"use client";
import { Trello } from "lucide-react";

export default function Navbar(){
   return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Trello />
                    <span>Trello Clone</span>
                </div>
            </div>
        </header>
      );
}