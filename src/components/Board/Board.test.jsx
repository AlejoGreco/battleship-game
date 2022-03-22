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

const player = 'CPU';

test('Board render', async () => {
    const {container, findByRole} = render(<Board matrix={boardTest} playerName={player}/>);
    
    const text = await findByRole('heading');

    expect(container.firstElementChild.children[1].children).toHaveLength(boardTest.length);
    expect(text).toHaveTextContent(player);
})