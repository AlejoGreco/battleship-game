import {useEffect} from 'react'

const useFireIA = (turn, pBoard, dispatchAccionFunc) => 
{
    useEffect(() => {
        if(turn === 'CPU')
        {
            // Ramdom fire
            const freeCells = [];           
            // Find undisplayed cells to fire and store them in the freeCells array
            pBoard.forEach(row => {
                row.forEach(cell => !cell.visible && freeCells.push(cell.coors))
            })
            
            // Generate a ramdom index to select the cell wich cpu player will fire
            let index = Math.round(Math.random() * (freeCells.length - 1));
            dispatchAccionFunc({coors : freeCells[index]});
        }
    
    }, [turn, pBoard, dispatchAccionFunc])
}

export default useFireIA;
