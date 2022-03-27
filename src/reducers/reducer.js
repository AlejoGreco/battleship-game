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
                // It was a hit
                const newShipsState = state.cpuShipsCoors.filter(ship => !ship[coors]);     // Ships that weren't hitted
                const shipStateToUpdate = state.cpuShipsCoors.find(ship => ship[coors])     // Hit ship 
                const newPlayerFireStatus = [...state.playerFireStatus, coors];
                shipStateToUpdate.hits = shipStateToUpdate.hits + 1;

                if(shipStateToUpdate.hits === shipStateToUpdate.length)
                {
                    // The ship was destroy
                    newPlayerFireStatus.forEach( coor => shipStateToUpdate[coor] = 'destroy');
                    const newUpdateCells = newPlayerFireStatus.map(coor => ({[coor] : 'destroy'}));
                    state = {
                        ...state, 
                        playerFireStatus : [],
                        updateCells : {board : 0, cells : newUpdateCells},
                        cpuShipsCoors:[...newShipsState, {...shipStateToUpdate}]
                    }
                }
                else
                {
                    // The ship not was destroy
                    state = {
                        ...state, 
                        playerFireStatus : newPlayerFireStatus,
                        updateCells : {board : 0, cells : [{[coors] : 'hit'}]},
                        cpuShipsCoors:[...newShipsState, {...shipStateToUpdate, [coors] : 'hit'}]
                    }
                }
            }    
            else
            {
                // Miss shoot
                state = {...state, updateCells : {board : 0, cells : [{[coors] : 'water'}]}, cpuWaterCoors : [...state.cpuWaterCoors, coors]}
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
                const newShipsState = state.playerShipsCoors.filter(ship => !ship[newCoors]);   // Ships that weren't hitted
                const newIAFireStatus = [...state.IAFireStatus, newCoors];
                shipStateToUpdate.hits = shipStateToUpdate.hits + 1;
                if(shipStateToUpdate.hits === shipStateToUpdate.length)
                {
                    // The ship was destroy
                    newIAFireStatus.forEach( coor => shipStateToUpdate[coor] = 'destroy');
                    const newUpdateCells = newIAFireStatus.map(coor => ({[coor] : 'destroy'}));
                    state = {
                        ...state, 
                        IAFireStatus : [],
                        playerFreeCoors: newFreePlayerCoors,
                        updateCells : {board : 1, cells : newUpdateCells},
                        playerShipsCoors:[...newShipsState, {...shipStateToUpdate}]
                    }
                }
                else
                {
                    // The ship was not destroy
                    state = {
                        ...state, 
                        updateCells : {board : 1, cells : [{[newCoors] : 'hit'}]},
                        IAFireStatus : newIAFireStatus,
                        playerFreeCoors: newFreePlayerCoors,
                        playerShipsCoors:[...newShipsState, {...shipStateToUpdate, [newCoors] : 'hit'}]
                    }
                }
            }       
            else
            {
                // It was not a hit
                state = {...state, updateCells : {board : 1, cells : [{[newCoors] : 'water'}]},playerFreeCoors: newFreePlayerCoors, playerWaterCoors : [...state.playerWaterCoors, newCoors]}
            }

            break;
        default:
            break;
    }
    return state;
}

export default reducer;