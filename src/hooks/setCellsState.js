import { useState, useEffect } from "react";
import { contentColors } from "../constants/constants";

const useCellsState = (playerShipsCoors, cpuShipsCoors, board, row, col, updateCells) => {
    const [cell, setCell] = useState({});
    const [cellStatus, setCellStatus] = useState(contentColors['hidden']);

    useEffect(() => {
        const coors = parseInt('' + row + col);
        
        let ship;
        if(board)
        {
            ship = playerShipsCoors.find(ship => ship[coors])
        }
        else
        {
            ship = cpuShipsCoors.find(ship => ship[coors])
        }
        ship ? ship = true : ship = false

        setCell({board, coors : coors, ship});    
    }, [playerShipsCoors, cpuShipsCoors, board, row, col])

    useEffect(() => {
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
