"use client";
import { createContext, useEffect, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useSession } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { useContext } from "react";


type SupabaseContext = {
   supabase: SupabaseClient | null,
   isLoaded: boolean, 
}

const Context = createContext<SupabaseContext>({
    supabase: null,
    isLoaded: false,
});

export default function SupabaseProvider({ children }:
     { children: React.ReactNode }) {
        const { session } = useSession();
        const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
        const [isLoaded, setIsLoaded] = useState<boolean>(false);
        useEffect(() => {
            if (!session) return;
            const client = createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,       
                {
                    accessToken: async() => session?.getToken() ?? null,
                }
            );
            setSupabase(client);
            setIsLoaded(true);
                }, [session]);

        return (
    <Context.Provider value={{ supabase, isLoaded }}>
        {isLoaded && supabase ? children : <div>Loading...</div>}
    </Context.Provider>
);

}

export const useSupabase = () => {
    const context = useContext(Context)
    if (context === undefined) {
        throw new Error("useSupabase must be used within a SupabaseProvider");
    }
    return context;
}

// PROBLEMA CON LA CONFIGUARCION DE SUPABASE, VIDEO PEDRO TECH TRELLO CLONE, 1:50:00 APROX
// FALTAN POLITICAS EN LA PARTE DE COLUMNAS EN SUPABASE.