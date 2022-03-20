import React from 'react'
import Typography from '@mui/material/Typography'

const BoardHeader = ({player}) => {
  return (
    <Typography color='gray' variant='h5'>{player}</Typography>
  )
}

export default BoardHeader