
const randomCoorsCalculation = freeCells => 
{ 
    // Generate a random index to select the cell wich cpu player will fire
    let index = Math.round(Math.random() * (freeCells.length - 1));
    return freeCells[index]; 
}

export default randomCoorsCalculation;
