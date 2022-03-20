import React from 'react'
import Container from '@mui/material/Container'
import Cell from '../Cell/Cell'

const RowCell = ({row}) => {
  return (
    <Container sx={{p : 0, m : 0}}>
        {
            row.map(item => <Cell visible={item.visible} content={item.content}/>)
        }
    </Container>
  )
}

export default RowCell