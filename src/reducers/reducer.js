import initialState from "./initialState";
import { newBoardState } from "../utils/newBoardState";
import randomCoorsCalculation from "../utils/randomCoorsCalculation";
import findFreeNextHitCells from '../utils/findFreeNextHitCells'
import { findFreeCells } from "../utils/findFreeCells"
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
            let newCoors;
            if(state.IAFireStatus.hitArray.length === 0)
            {
                // If there is no previos ship hited, the next fire ship it will be to a ramdom position
                newCoors = randomCoorsCalculation(findFreeCells(state.playerBoard))
            }
            else 
            {
                debugger
                // Find free cells next to a previos ship hit
                let aux = findFreeNextHitCells(state.IAFireStatus)
                const freeNextFireCells = aux.filter(coors => {
                    let cell = state.playerBoard[coors.row - 1][coors.col - 1]
                    // Here it checked that the cells were defined and free
                    if (!cell.visible)
                        return coors;
                })

                newCoors = randomCoorsCalculation(freeNextFireCells);
            }
            state = {...state, playerBoard : newBoardState(state.playerBoard, newCoors, state.IAFireStatus.hitArray), playerTurn : state.playerName}
            break;
        default:
            break;
    }
    return state;
}

export default reducer;