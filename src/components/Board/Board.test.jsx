import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Board from './Board'

const boardTest = [
    [{visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'ship'}],
    [{visible : false, content : 'water'}, {visible : true, content : 'destroy'}, {visible : true, content : 'destroy'}, {visible : false, content : 'water'}, {visible : true, content : 'hit'}],
    [{visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'hit'}],
    [{visible : false, content : 'ship'}, {visible : false, content : 'ship'}, {visible : false, content : 'ship'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}],
    [{visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}]
];

test('Board render', async () => {
    const {container} = render(<Board matrix={boardTest}/>);
    
    expect(container.firstElementChild.firstElementChild.children).toHaveLength(boardTest.length)
})