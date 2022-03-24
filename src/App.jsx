import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import GameScreen from './components/GameScreen/GameScreen';
import initialState from './components/initialState';
import { newBoardState } from './utils/newBoardState';

const initalValue = initialState;

const reducer = (state = initalValue, action) => {
    switch (action.type)
    {
        case 'SHOW_CELL_CONTENT':
            // The cell to show is on CPU board
            state = {...state, cpuBoard : newBoardState(state.cpuBoard, action.payload.coors), playerTurn : 'CPU'}
            break;
        case 'SHOW_CELL_CONTENT_IA':
            // The cell to show is on CPU board
            state = {...state, playerBoard : newBoardState(state.playerBoard, action.payload.coors), playerTurn : state.playerName}
            break;
        default:
            break;
    }
    return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        <Provider store={store}> 
            <GameScreen />
        </Provider>
    );
}

export default App;
