import { useState, useEffect } from "react";
import { contentColors } from "../constants/constants";

const useCellsState = (playerShipsCoors, cpuShipsCoors, board, row, col, updateCells) => {
    const [cell, setCell] = useState({});
    const [cellStatus, setCellStatus] = useState(contentColors['hidden']);

    useEffect(() => {
        // This effect sets the location information for the cells
        const coors = parseInt('' + row + col);

        setCell({board, coors : coors});    
    }, [playerShipsCoors, cpuShipsCoors, board, row, col])

    useEffect(() => {
        // Sets the cell's state (hidden/hit/destroy)
        const {board, coors} = cell;
        let update;

        if(updateCells)
        {
            if(board === updateCells.board)
            {
                update = updateCells.cells.find(c => c[coors])
            }
        }       
        
        setCellStatus(update ? contentColors[update[coors]] : cellStatus)
    }, [updateCells, cell, cellStatus])

    return [cell, cellStatus]
}

export default useCellsState;
