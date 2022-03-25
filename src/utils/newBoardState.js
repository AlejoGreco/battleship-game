// Function used to generate the new board state for the redux store

export const newBoardState = (boardMatrix, cellCoors, hits) => {
    // Make the cell visible
    const newBoard = [...boardMatrix];
    const cell = newBoard[cellCoors.row - 1][cellCoors.col - 1];
    cell.visible = true;

    // Check if there is a ship on the cell and keep the hit coors if it was
    if(cell.content === 'ship')
    {
        cell.content = 'hit';
        hits.push(cell);
    }
    return  newBoard;    
}