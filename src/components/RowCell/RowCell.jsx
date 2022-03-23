import React from 'react'
import Container from '@mui/material/Container'
import Cell from '../Cell/Cell'

const RowCell = ({row}) => {
  return (
    <Container sx={{p : 0, m : 0, height : '50px'}}>
        {
            row.map(item => <Cell {...item} />)
        }
    </Container>
  )
}

export default RowCell