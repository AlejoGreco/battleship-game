export const checkIfAreFreeCells = (freeCells, calulatedCells) => {
    const freeCellsCheck = [];           
    // Find undisplayed cells to fire and store them in the freeCells array
    for(const cell of calulatedCells)
    {
        freeCells.forEach(fc => cell === fc && freeCellsCheck.push(cell))
    }

    return freeCellsCheck;
}
