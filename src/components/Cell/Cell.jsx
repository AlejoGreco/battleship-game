import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { setHitCells } from '../../actions/actions';
import useCellsState from '../../hooks/setCellsState';
import { contentColors } from '../../constants/constants';


const Cell = ({board, row, col, playerShipsCoors, cpuShipsCoors, setHit, updateCells}) => {
    
    const [cell, cellStatus] = useCellsState(playerShipsCoors, cpuShipsCoors, board, row, col, updateCells)

    return (
        <Box 
        onClick={() =>  cellStatus === contentColors['hidden'] && setHit(cell)}// The dispatch only occurs if the cell belongs to cpu board
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
