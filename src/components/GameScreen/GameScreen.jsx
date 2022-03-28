import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Board from './../Board/Board'
import BoxInfo from '../BoxInfo/BoxInfo'
import { connect } from 'react-redux'
import { sendPlayMsg } from '../../actions/actions'


const GameScreen = ({playerName, lastShoot, setPlayMsg}) => {
    useEffect(()=> {
        setPlayMsg({...lastShoot})
    }, [lastShoot, setPlayMsg])

    return (
        <Grid container justifyContent={'end'} rowSpacing={3}>
            <Grid item xs={12} sm={6} sx={{display : 'flex', justifyContent : 'center'}} >
                <Board board={1} playerName={playerName} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display : 'flex', justifyContent : 'center'}}>
                <Board board={0} playerName='CPU' />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display : 'flex', justifyContent : 'center'}}>
                <BoxInfo />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        playerName   : state.playerName,
        turn         : state.playerTurn,
        lastShoot    : state.updateCells
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlayMsg : payload => dispatch(sendPlayMsg(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)