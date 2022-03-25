
const ramdomCoorsCalculation = (board) => 
{ 
    // Ramdom fire
    const freeCells = [];           
    // Find undisplayed cells to fire and store them in the freeCells array
    board.forEach(row => {
        row.forEach(cell => !cell.visible && freeCells.push(cell.coors))
    })
    
    // Generate a ramdom index to select the cell wich cpu player will fire
    let index = Math.round(Math.random() * (freeCells.length - 1));
    return freeCells[index];
    
}

export default ramdomCoorsCalculation;
