import { createClient } from '@/lib/supabase/client';
import { Board, Column } from './supabase/models';

const supabase = createClient();

export const boardService = {
    async getBoards(userId: string): Promise<Board[]>{
        const { data, error } = await supabase
        .from("boards")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", {ascending:false});

        if (error) {
            console.error("Error fetching boards:", error);
            return [];
        }
        return data;
    },
        //min 1:15:00 del video 
    async createBoard(board: Omit<Board, "id" | "created_at" | "updated_at">): Promise<Board> {
        const { data, error } = await supabase
            .from("boards")
            .insert(board)
            .select()
            .single();

        if (error) {
            console.error("Error creating board:", error);
            throw error;
        }
        return data;
    },
}


//Cuando se crea un tablero, se crea directamente con columnas vacias y alli se pueden editar.
export const columnService = {
    // async getBoards(userId: string): Promise<Board[]>{
    //     const { data, error } = await supabase
    //     .from("boards")
    //     .select("*")
    //     .eq("user_id", userId)
    //     .order("created_at", {ascending:false});

    //     if (error) {
    //         console.error("Error fetching boards:", error);
    //         return [];
    //     }
    //     return data;
    // },

    async createColumn(column: Omit<Column, "id" | "created_at">): Promise<Column> {
        const { data, error } = await supabase
            .from("columns")
            .insert(column)
            .select()
            .single();

        if (error) {
            console.error("Error creating board:", error);
            throw error;
        }
        return data;
    },
}


//Cuando se crea un tablero, se crea directamente con columnas vacias y alli se pueden editar.
export const boardDataService = {
    async createBoardWithDefaultColumns(boardData: {
        title: string;
         description?: string;
         color?:string;
          userId?: string;
        }) {
       const board = await boardService.createBoard({
        title: boardData.title,
        description: boardData.description || null,
        color: boardData.color || "bg-blue-500",
        user_id: boardData.userId ?? "", // Ensure user_id is set
       });

       const defaultColumns = [
        { title: "To Do", board_id: board.id, sort_order: 0 },
        { title: "In Progress", board_id: board.id, sort_order: 1 },
        { title: "Review", board_id: board.id, sort_order: 2 },
        { title: "Done", board_id: board.id, sort_order: 3 },
       ];

       await Promise.all(defaultColumns.map(column =>
        columnService.createColumn({
          ...column,        
          board_id: board.id,
        })
      ));
      return board;
   }
};
