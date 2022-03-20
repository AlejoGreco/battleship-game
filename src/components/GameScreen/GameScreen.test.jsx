import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import GameScreen from './GameScreen'

const boardTest = [
    [{visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'ship'}],
    [{visible : false, content : 'water'}, {visible : true, content : 'destroy'}, {visible : true, content : 'destroy'}, {visible : false, content : 'water'}, {visible : true, content : 'hit'}],
    [{visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'hit'}],
    [{visible : false, content : 'ship'}, {visible : false, content : 'ship'}, {visible : false, content : 'ship'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}],
    [{visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}, {visible : true, content : 'water'}, {visible : false, content : 'water'}]
];

test('Game screen render', () => {
    const {container} = render(<GameScreen player={'Alejo'} matrix={boardTest} />)

    expect(container.firstElementChild.children).toHaveLength(3)
})