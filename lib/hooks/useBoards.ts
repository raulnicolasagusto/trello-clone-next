import { useState } from "react";
import { boardService } from "../services";
import { useUser } from "@clerk/nextjs";
import { Board } from "../supabase/models";

export function useBoards(){
    const { user } = useUser();
    const [boards, setBoards] = useState<Board[]>([]);

    async function createBoard(boardData: {
        title: string;
        description?: string;
        color?:string;
    }){
        
        
        if (!user) {
            throw new Error("User not authenticated");
        }

            try{
                const newBoard = await boardService.createBoardWithDefaultColumns({
                    ...boardData,
                    userId: user.id,
                });
            }catch (error) {
                console.error("Error creating board:", error);
                throw error;
            }
        }
        
    }
        
    //Continuar min 1:32:00
        

    
