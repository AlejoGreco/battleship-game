import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../stores/store'
import RowCell from './RowCell'

const rowTest= store.getState().playerBoard[0];
        
test('Row Cell render', async () => {
    const {container} = render(
        <Provider store={store}>
            <RowCell row={rowTest}></RowCell>
        </Provider>
    )
    
    expect(container.firstElementChild.children).toHaveLength(rowTest.length);
})