// Function used to generate the new board state for the redux store

export const newBoardState = (boardMatrix, cellCoors) => {
    const newBoard = [...boardMatrix];
    newBoard[cellCoors.row - 1][cellCoors.col - 1].visible = true;
    return  newBoard;
        
}