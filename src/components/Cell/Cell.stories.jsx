import React from 'react'
import Cell from './Cell'

export default {
    title : 'Cell',
    component : Cell
}

export const NoVisibleCell = () => <Cell visible={false} content={'NO'} />
export const WaterCell = () => <Cell visible={true} content={'water'} />