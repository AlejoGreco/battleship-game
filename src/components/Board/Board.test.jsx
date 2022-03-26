import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../stores/store'
import Board from './Board'

const boardTest= store.getState().playerBoard;

const player = 'CPU';

test('Board render', async () => {
    const {container, findByRole} = render(
        <Provider store={store}>
            <Board matrix={boardTest} playerName={player} />
        </Provider>
    );
    
    const text = await findByRole('heading');

    //expect(container.firstElementChild.children[1].children).toHaveLength(boardTest.length);
    expect(text).toHaveTextContent(player);
})