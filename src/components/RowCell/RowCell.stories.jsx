import React from 'react'
import RowCell from './RowCell'

const rowTest = [
    {visible : true, content : 'water'},
    {visible : false, content : 'water'}, 
    {visible : true, content : 'water'}, 
    {visible : false, content : 'water'}, 
    {visible : false, content : 'ship'}
]

export default {
    title : 'RowCell',
    component : RowCell
}

export const rowExample = () => <RowCell row={rowTest}/>