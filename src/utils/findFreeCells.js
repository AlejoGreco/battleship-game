export const findFreeCells = board => {
    const freeCells = [];           
    // Find undisplayed cells to fire and store them in the freeCells array
    board.forEach(row => {
        row.forEach(cell => !cell.visible && freeCells.push(cell.coors))
    })

    return freeCells;
}