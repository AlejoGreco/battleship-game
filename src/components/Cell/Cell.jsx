import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { showCellContentCPU } from '../../actions/actions';


const contentColors = {
    water : 'primary.light',
    ship : 'gray',
    hit : 'warning.light',
    destroy : 'error.main'
}

const Cell = ({visible, content, board, coors, getCellContentFromCPU}) => {
    return (
        <Box 
        onClick={   // The dispatch only occurs if the cell belongs to cpu board
            () => {
                !board && getCellContentFromCPU({coors});
                return;
            }}
        sx={{
                width: 50,
                height: 50,
                m: 0,
                p: 0,
                backgroundColor: (visible ? contentColors[content] : 'white'),
                outline: '1px solid grey',
                display: 'inline-block',
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

const mapDispatchToProps = dispatch => {
    return {
        getCellContentFromCPU : cell => dispatch(showCellContentCPU(cell))
    }
}

export default connect(null, mapDispatchToProps)(Cell)