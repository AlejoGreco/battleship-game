import initialState from "./initialState";
import randomCoorsCalculation from "../utils/randomCoorsCalculation";
import { SET_CELL_HIT_CPU, SET_CELL_HIT_PLAYER } from "../actions/actions";
import findPossibleHitCells from "../utils/findPossibleHitCells";
import { checkIfAreFreeCells } from "../utils/checkIfAreFreeCells";

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SET_CELL_HIT_CPU:
            // The cell to update is on CPU board
            const { ship, coors } = action.payload;
            if(ship)
            {   

                const newShipsState = state.cpuShipsCoors.filter(ship => !ship[coors]);     // Ships that weren't hitted
                const shipStateToUpdate = state.cpuShipsCoors.find(ship => ship[coors])     // Hit ship
                
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
            let newFreePlayerCoors; 
            let shipStateToUpdate;
            let newCoors;

            if(state.IAFireStatus.length > 0)
            {
                const aux = findPossibleHitCells(state.IAFireStatus);
                
                newCoors = randomCoorsCalculation(checkIfAreFreeCells(state.playerFreeCoors, aux));
            }
            else
            {
                // Random fire coors calculation
                newCoors = randomCoorsCalculation(state.playerFreeCoors);
            }
            // It generated of new free player coors with out the last coords calculation
            newFreePlayerCoors = state.playerFreeCoors.filter(c => c !== newCoors);
            
            // Find if it was a hit
            shipStateToUpdate = state.playerShipsCoors.find(ship => ship[newCoors]);

            if(shipStateToUpdate)
            {
                // It was a hit
                const newShipsState = state.playerShipsCoors.filter(ship => !ship[newCoors]);
                state = {
                    ...state, 
                    updateCells : [{board : 1, [newCoors] : 'hit'}],
                    IAFireStatus : [...state.IAFireStatus, newCoors],
                    playerFreeCoors: newFreePlayerCoors,
                    playerShipsCoors:[...newShipsState, {...shipStateToUpdate, [newCoors] : 'hit'}]
                }
            }       
            else
            {
                // It was not a hit
                state = {...state, updateCells : [{board : 1, [newCoors] : 'water'}],playerFreeCoors: newFreePlayerCoors, playerWaterCoors : [...state.playerWaterCoors, newCoors]}
            }

            break;
        default:
            break;
    }
    return state;
}

export default reducer;