import React from 'react'
import Grid from '@mui/material/Grid'
import Board from './../Board/Board'
import BoxInfo from '../BoxInfo/BoxInfo'


const GameScreen = ({player, matrix}) => {
  return (
    <Grid container justifyContent={'end'} rowSpacing={3}>
        <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}} >
            <Board matrix={matrix} player={player}/>
        </Grid>
        <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}}>
            <Board matrix={matrix} player={player}/>
        </Grid>
        <Grid item xs={12} sm={6} xl={4} sx={{display : 'flex', justifyContent : 'center'}}>
            <BoxInfo turn={player} />
        </Grid>
    </Grid>
  )
}

export default GameScreen