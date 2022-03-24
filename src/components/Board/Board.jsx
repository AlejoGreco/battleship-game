import React from 'react'
import RowCell from '../RowCell/RowCell'
import { Container } from '@mui/material'
import BoardHeader from '../BoardHeader/BoardHeader'

const Board = ({matrix, playerName}) => {

    return (
        <Container sx={{display : 'inline-block', width : 'auto', p : 0, m : 0}}>
            <BoardHeader player={playerName}/>
            <Container sx={{border : '3px solid gray', display : 'inline-block', width : 'auto', p : 0, m : 0}}>
                {matrix.map(row => <RowCell row={row} key={row[0].coors.row} />)}
            </Container>
        </Container>
    )
}

export default Board