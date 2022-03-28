import React from 'react'
import RowCell from '../RowCell/RowCell'
import { Container } from '@mui/material'
import BoardHeader from '../BoardHeader/BoardHeader'

const rowsGenerator = [...Array(10).keys()];

const Board = ({board, playerName}) => {

    return (
        <Container sx={{display : 'inline-block', width : 'auto', p : 0, m : 0}}>
            <BoardHeader player={playerName}/>
            <Container sx={{border : '3px solid gray', display : 'inline-block', width : 'auto', p : 0, m : 0}}>
                {rowsGenerator.map(row => <RowCell {...{row, board}}  key={row} />)}
            </Container>
        </Container>
    )
}

export default Board