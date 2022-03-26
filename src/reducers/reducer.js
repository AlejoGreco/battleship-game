import initialState from "./initialState";
import { newBoardState } from "../utils/newBoardState";
import randomCoorsCalculation from "../utils/randomCoorsCalculation";
import findFreeNextHitCells from '../utils/findFreeNextHitCells'
import { findFreeCells } from "../utils/findFreeCells"
import { SET_CELL_HIT_CPU, SET_CELL_HIT_PLAYER } from "../actions/actions";

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SET_CELL_HIT_CPU:
            // The cell to update is on CPU board
            const { ship, coors } = action.payload;
            if(ship)
            {   
                const newShipsState = state.cpuShipsCoors.filter(ship => !ship[coors]);
                const shipStateToUpdate = state.cpuShipsCoors.find(ship => ship[coors])
                
                state = {
                    ...state, 
                    cpuShipsCoors:[...newShipsState, {...shipStateToUpdate, [coors] : 'hit'}]
                }
            }    
            else
            {
                state = {...state, cpuWaterCoors : [...state.cpuWaterCoors, coors]}
            }
            break;
        case SET_CELL_HIT_PLAYER:
            // The cell to show is on PLAYER board
            break;
        default:
            break;
    }
    return state;
}

export default reducer;