import React from 'react'
import RowCell from '../RowCell/RowCell'
import { Container } from '@mui/material'


const Board = ({matrix}) => {

    return (
        <Container sx={{border : '3px solid gray', display : 'inline-block', width : 'auto', p : 0, m : 0}}>
            {matrix.map(row => <RowCell row={row}/>)}
        </Container>
    )
}

export default Board