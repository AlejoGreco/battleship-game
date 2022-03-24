import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Board from './../Board/Board'
import BoxInfo from '../BoxInfo/BoxInfo'
import { connect } from 'react-redux'
import useFireIA from '../../hooks/useFireIA'


const GameScreen = ({playerBoard, cpuBoard, playerName, turn, getCellContentFromPlayer, IAfireStatus}) => {
    /*
    useEffect(() => {
        if(turn === 'CPU')
        {
            const freeCells = [];
            playerBoard.forEach(row => {
                row.forEach(cell => !cell.visible && freeCells.push(cell.coors))
            })

            let index = Math.round(Math.random() * (freeCells.length - 1));
            getCellContentFromPlayer({coors : freeCells[index]});
        }

    }, [turn, playerBoard, getCellContentFromPlayer])
    */

    useFireIA(turn, playerBoard, getCellContentFromPlayer);

    return (
        <Grid container justifyContent={'end'} rowSpacing={3}>
            <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}} >
                <Board matrix={playerBoard} playerName={playerName} />
            </Grid>
            <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}}>
                <Board matrix={cpuBoard} playerName='CPU' />
            </Grid>
            <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}}>
                <BoxInfo />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        playerBoard  : state.playerBoard,
        cpuBoard     : state.cpuBoard,
        playerName   : state.playerName,
        turn         : state.playerTurn,
        IAfireStatus : state.IAfireStatus 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCellContentFromPlayer : cell => dispatch({type : 'SHOW_CELL_CONTENT_IA', payload : cell})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)