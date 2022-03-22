import React from 'react'
import Grid from '@mui/material/Grid'
import Board from './../Board/Board'
import BoxInfo from '../BoxInfo/BoxInfo'
import { connect } from 'react-redux'


const GameScreen = ({playerBoard, cpuBoard, playerName, getCellContent}) => {
    return (
        <Grid container justifyContent={'end'} rowSpacing={3}>
            <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}} >
                <Board matrix={playerBoard} playerName={playerName} onClickReveal={getCellContent}/>
            </Grid>
            <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}}>
                <Board matrix={cpuBoard} playerName='CPU' onClickReveal={getCellContent}/>
            </Grid>
            <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}}>
                <BoxInfo />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        playerBoard : state.playerBoard,
        cpuBoard    : state.cpuBoard,
        playerName  : state.playerName
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        getCellContent : cell => dispatch({type : 'SHOW_CELL_CONTENT', payload : cell})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)