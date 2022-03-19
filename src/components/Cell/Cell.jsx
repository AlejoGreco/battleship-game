import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const contentColors = {
    water : 'primary.light',
    ship : 'gray',
    hit : 'warning.light',
    destroy : 'error.main'
}

const Cell = ({visible, content}) => {
  return (
    <Box sx={
        {
            width: 40,
            height: 40,
            backgroundColor: (visible ? contentColors[content] : 'white'),
            border: '1px solid grey',
            '&:hover': {
                backgroundColor: 'gray',
                opacity: [0.9, 0.8, 0.7],
            }
        }
    }>
        <Typography variant='span' display={'none'}>{ visible ? content : '-' }</Typography>
    </Box>
  )
}


export default Cell