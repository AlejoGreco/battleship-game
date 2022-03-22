import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import GameScreen from './components/GameScreen/GameScreen';
import initialState from './components/initialState';

const initalValue = initialState;

const newBoardState = (boardMatrix, cellCoors) => {
    const newBoard = [...boardMatrix];
    newBoard[cellCoors.row - 1][cellCoors.col - 1].visible = true;
    return  newBoard;
        
}

const reducer = (state = initalValue, action) => {
    switch (action.type){
        case 'SHOW_CELL_CONTENT':
            if(action.payload.board)
            {
                // The cell to show is on player board
                return {...state, playerBoard : newBoardState(state.playerBoard, action.payload.coors)}
            }
            else
            {
                // The cell to show is on CPU board
                return {...state, cpuBoard : newBoardState(state.cpuBoard, action.payload.coors)}
            }
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
