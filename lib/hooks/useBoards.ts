"use client";

import { useState, useEffect } from "react";
import { boardService } from "../services"; // Use boardService for getBoards
import { boardDataService } from "../services";
import { useUser } from "@clerk/nextjs";
import { Board } from "../supabase/models";
import { useSupabase } from "../supabase/SupabaseProvider";

export function useBoards() {
    const { user } = useUser();
    const { supabase } = useSupabase();
    const [boards, setBoards] = useState<Board[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch boards on mount or when user changes
    useEffect(() => {
        async function fetchBoards() {
            if (!user) {
                setLoading(false);
                return;
            }
            try {
                const boards = await boardService.getBoards(supabase!, user.id);
                setBoards(boards);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Error loading boards");
            } finally {
                setLoading(false);
            }
        }
        fetchBoards();
    }, [user, supabase]);

    async function createBoard(boardData: {
        title: string;
        description?: string;
        color?: string;
    }) {
        if (!user) {
            throw new Error("User not authenticated");
        }
        try {
            const newBoard = await boardDataService.createBoardWithDefaultColumns(supabase!, {
                ...boardData,
                userId: user.id,
            });
            setBoards((prev) => [newBoard, ...prev]);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Error creating board");
        } finally {
            setLoading(false);
        }
    }

    return { boards, loading, error, createBoard };
}