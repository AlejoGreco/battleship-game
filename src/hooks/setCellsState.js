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
        console.log(cellStatus)
        let update;
        if(updateCells.length > 0)
        {
            if(board === updateCells[0].board)
            {
                if(updateCells[0][coors]!== undefined) 
                    update = updateCells[0][coors]; 
            }
        }       
        
        setCellStatus(update ? contentColors[update] : cellStatus)
    }, [updateCells, cell, cellStatus])

    return [cell, cellStatus]
}

export default useCellsState;
