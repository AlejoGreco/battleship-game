import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import RowCell from './RowCell'

const rowTest = [
    {visible : true, content : 'water'},
    {visible : false, content : 'water'}, 
    {visible : true, content : 'water'}, 
    {visible : false, content : 'water'}, 
    {visible : false, content : 'ship'}
]

test('Row Cell render', async () => {
    const {container} = render(<RowCell row={rowTest}></RowCell>)
    
    expect(container.firstElementChild.children).toHaveLength(rowTest.length);
})