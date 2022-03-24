import initialState from "./initialState";
import { newBoardState } from "../utils/newBoardState";
import { SHOW_CELL_CONTENT_CPU, SHOW_CELL_CONTENT_PLAYER } from "../actions/actions";

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SHOW_CELL_CONTENT_CPU:
            // The cell to show is on CPU board
            state = {...state, cpuBoard : newBoardState(state.cpuBoard, action.payload.coors), playerTurn : 'CPU'}
            break;
        case SHOW_CELL_CONTENT_PLAYER:
            // The cell to show is on PLAYER board
            state = {...state, playerBoard : newBoardState(state.playerBoard, action.payload.coors), playerTurn : state.playerName}
            break;
        default:
            break;
    }
    return state;
}

export default reducer;