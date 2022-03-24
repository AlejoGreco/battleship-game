import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cell from './Cell'
import { Provider } from 'react-redux'
import store from '../../stores/store'


let item = {visible : false, content : 'water', board : 1, coors : {row : 1, col: 1}}

test('No visible cell render', async () => {
    const { findByText } = render(
        <Provider store={store}>
            <Cell {...item}/>
        </Provider>
    );
    
    const text = await findByText('-');

    expect(text).toBeDefined;
})


test('Visible water cell render', async () => {
    const { findByText } = render(
        <Provider store={store}>
            <Cell {...item}/>
        </Provider>
    );

    const text = await findByText('-');
    
    expect(text).toBeDefined;
})