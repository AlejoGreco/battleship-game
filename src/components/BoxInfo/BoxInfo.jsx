import React from 'react'
import Container from '@mui/material/Container'
import { Typography, Button } from '@mui/material'

const BoxInfo = ({turn}) => {
  return (
    <Container 
        sx={
            {
                display:'flex', 
                alignItems:'center', 
                width : 'auto'
            }
        }
    >
        <Typography variant='h6' color='gray'>Playing: {<strong>{turn}</strong>}</Typography>
        <Button 
            variant='outlined' 
            size='large' 
            sx={
                { 
                    border : 'solid 3px gray', 
                    color : 'gray',
                    ml : '3rem',
                    '&:hover' : {borderWidth : '3px'}
                }
            }
        >
            Surrender
        </Button>
    </Container>
  )
}

export default BoxInfo