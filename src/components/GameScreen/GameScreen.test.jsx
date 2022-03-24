import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../stores/store'
import GameScreen from './GameScreen'

const state = store.getState();

test('Game screen render', () => {
    const {container} = render(
        <Provider store={store}>
            <GameScreen cpuBoard={state.cpuBoard} playerBoard={state.playerBoard} playerName='Alejo'/>
        </Provider>
    )

   expect(container.firstElementChild.children).toHaveLength(3)
})