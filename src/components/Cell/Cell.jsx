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

const Cell = ({board, row, col, playerShipsCoors, cpuShipsCoors, setHit}) => {
    
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

    // sacar de aca despues
    const onClickCell = () => {
        if(!cell.board)
        {
            setHit(cell)
            cell.ship 
                ? 
                    setCellStatus(contentColors['hit'])    
                :
                    setCellStatus(contentColors['water'])
            
        }
    }

    return (
        <Box 
        onClick={   // The dispatch only occurs if the cell belongs to cpu board
                onClickCell
            }
        sx={{
                width: 50,
                height: 50,
                m: 0,
                p: 0,
                backgroundColor: (cellStatus),
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
        cpuShipsCoors    : state.playerShipsCoors
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
