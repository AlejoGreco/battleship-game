import React from 'react'
import Grid from '@mui/material/Grid'
import Board from './../Board/Board'
import BoxInfo from '../BoxInfo/BoxInfo'
import { connect } from 'react-redux'


const GameScreen = ({playerBoard, cpuBoard, playerName}) => {

    return (
        <Grid container justifyContent={'end'} rowSpacing={3}>
            <Grid item xs={12} sm={6} sx={{display : 'flex', justifyContent : 'center'}} >
                <Board matrix={playerBoard} playerName={playerName} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display : 'flex', justifyContent : 'center'}}>
                <Board matrix={cpuBoard} playerName='CPU' />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display : 'flex', justifyContent : 'center'}}>
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

export default connect(mapStateToProps)(GameScreen)