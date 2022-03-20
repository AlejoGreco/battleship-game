import React from 'react'
import Grid from '@mui/material/Grid'
import RowCell from '../RowCell/RowCell'
import { Container } from '@mui/material'


const Board = ({matrix}) => {

    return (
        <Grid item sm={6}>
            <Container sx={{border : '3px solid gray', display : 'inline-block', width : 'auto', p : 0, m : 0}}>
                {matrix.map(row => <RowCell row={row}/>)}
            </Container>
        </Grid>
    )
}

export default Board