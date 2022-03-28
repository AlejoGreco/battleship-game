import initialState from "./initialState";
import { SET_CELL_HIT_CPU, SET_CELL_HIT_PLAYER, RESET_MSG, SET_MSG } from "../constants/constants";
import { processPayload } from "../utils/processPayload";
import { processMissPayload } from "../utils/processMissPayload";
import { newCoorsCalc } from "../utils/newCoorsCalc";

export const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SET_CELL_HIT_CPU:
            // The cell to update is on CPU board
            const { coors } = action.payload;
            
            // Find if it was a hit
            const [result_, newFireStatus_, newUpdateCells_, newShipsState_, newShipState_] = processPayload(state.cpuShipsCoors, state.playerFireStatus, coors)
            if(result_)
            {    
                // It was a hit
                state = {
                    ...state, 
                    playerFireStatus : newFireStatus_,
                    updateCells : {board : 0, cells : newUpdateCells_},
                    cpuShipsCoors:[...newShipsState_, {...newShipState_}]
                }
            } 
            else
            {
                // Miss shoot
                const [newUpdateCells, newWaterCoors] = processMissPayload(state.cpuWaterCoors, coors)
                
                state = {
                    ...state, 
                    updateCells : {board : 0, cells : newUpdateCells},
                    cpuWaterCoors : newWaterCoors
                }
            }
            break;
        case SET_CELL_HIT_PLAYER:
            // The cell to show is on PLAYER board
            const newCoors = newCoorsCalc(state.IAFireStatus, state.playerFreeCoors)
            
            // It generated of new free player coors with out the last coords calculation
            const newFreePlayerCoors = state.playerFreeCoors.filter(c => c !== newCoors);
            
            // Find if it was a hit
            const [result, newFireStatus, newUpdateCells, newShipsState, newShipState] = processPayload(state.playerShipsCoors, state.IAFireStatus, newCoors)
            if(result)
            {    
                // It was a hit
                state = {
                    ...state, 
                    IAFireStatus : newFireStatus,
                    playerFreeCoors: newFreePlayerCoors,
                    updateCells : {board : 1, cells : newUpdateCells},
                    playerShipsCoors:[...newShipsState, {...newShipState}]
                }
            }       
            else
            {
                // It was not a hit
                const [newUpdateCells, newWaterCoors] = processMissPayload(state.playerWaterCoors, newCoors)
                
                state = {
                    ...state, 
                    updateCells : {board : 1, cells : newUpdateCells},
                    playerFreeCoors: newFreePlayerCoors, 
                    playerWaterCoors : newWaterCoors
                }
            }
            break;
        case SET_MSG:
            const cell = action.payload.cells[0];
            let msg = '';
            if(cell){
                const coorsIterator = [...Array(100).keys()];
                msg = cell[coorsIterator.find(coor => cell[coor])];
            }            
            state = {...state, userMessage : msg}
            break;
        case RESET_MSG:
            state = {...state, userMessage : ''}
            break;
        default:
            break;
    }
    return state;
}
