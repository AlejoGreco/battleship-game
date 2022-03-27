import initialState from "./initialState";
import randomCoorsCalculation from "../utils/randomCoorsCalculation";
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
                    updateCells : [{board : 0, [coors] : 'hit'}],
                    cpuShipsCoors:[...newShipsState, {...shipStateToUpdate, [coors] : 'hit'}]
                }
            }    
            else
            {
                state = {...state, updateCells : [{board : 0, [coors] : 'water'}], cpuWaterCoors : [...state.cpuWaterCoors, coors]}
            }
            break;
        case SET_CELL_HIT_PLAYER:
            // The cell to show is on PLAYER board
            
            if(state.IAFireStatus.hitArray.length > 0)
            {

            }
            else
            {
                // Random fire calculation
                const newCoors = randomCoorsCalculation(state.playerFreeCoors);

                // It generated of new free player coors with out the last coords calculation
                const newFreePlayerCoors = state.playerFreeCoors.filter(c => c !== newCoors);
                
                const shipStateToUpdate = state.playerShipsCoors.find(ship => ship[newCoors]);
                if(shipStateToUpdate)
                {
                    // It was an hit
                    const newShipsState = state.playerShipsCoors.filter(ship => !ship[newCoors]);
                    state = {
                        ...state, 
                        updateCells : [{board : 1, [newCoors] : 'hit'}],
                        playerFreeCoors: newFreePlayerCoors,
                        playerShipsCoors:[...newShipsState, {...shipStateToUpdate, [newCoors] : 'hit'}]
                    }
                }       
                else
                {
                    // It was not a hit
                    state = {...state, updateCells : [{board : 1, [newCoors] : 'water'}],playerFreeCoors: newFreePlayerCoors, playerWaterCoors : [...state.playerWaterCoors, newCoors]}
                }
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;