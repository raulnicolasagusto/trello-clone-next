
export function useBoards(){

    async function createBoard(boardData: {
        title: string;
        description?: string;
        color?:string;
    }){
        const { user } = useUser();
        if (!user) {
            throw new Error("User not authenticated");
        }

        const board = {
            user_id: user.id,
            title: boardData.title,
            description: boardData.description || "",
        };

        return await boardService.createBoard(board);
    }){
        

    
}