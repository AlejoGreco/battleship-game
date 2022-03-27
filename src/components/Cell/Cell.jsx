import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { setHitCells } from '../../actions/actions';


const contentColors = {
    hidden : 'white',
    water : 'primary.light',
    ship : 'gray',
    hit : 'warning.light',
    destroy : 'error.main'
}

const Cell = ({board, row, col, playerShipsCoors, cpuShipsCoors, setHit, updateCells}) => {
    
    const [cell, setCell] = useState({});
    const [cellStatus, setCellStatus] = useState(contentColors['hidden']) 

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

    return (
        <Box 
        onClick={() =>  setHit(cell)}// The dispatch only occurs if the cell belongs to cpu board
        sx={{
                width: 50,
                height: 50,
                m: 0,
                p: 0,
                backgroundColor: cellStatus,
                outline: '1px solid grey',
                display: 'inline-block',
                '&:hover': {
                    backgroundColor: 'gray',
                    opacity: [0.9, 0.8, 0.7],
                }
            }
        }>
            <Typography variant='span' display={'none'}>{'-'}</Typography>
        </Box>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setHit  : payload => dispatch(setHitCells(payload))
    }
}

const mapStateToProps = state => {
    return {
        playerShipsCoors : state.playerShipsCoors,
        cpuShipsCoors    : state.playerShipsCoors,
        updateCells      : state.updateCells
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
