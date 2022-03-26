import React from 'react'
import Container from '@mui/material/Container'
import Cell from '../Cell/Cell'

const colsGenerator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RowCell = ({board, row}) => {
  return (
    <Container sx={{p : 0, m : 0, height : '50px'}}>
        {
            colsGenerator.map(col => <Cell {...{board, row, col}} key={`${row}${col}`}/>)
        }
    </Container>
  )
}

export default RowCell