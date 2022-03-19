import React from 'react'
import Container from '@mui/material/Container'
import Cell from '../Cell/Cell'

const RowCell = ({row}) => {
  return (
    <Container>
        {
            row.map(item => <Cell visible={item.visible} content={item.content}/>)
        }
    </Container>
  )
}

export default RowCell