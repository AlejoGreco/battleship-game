import { SET_CELL_HIT_CPU, SET_CELL_HIT_PLAYER, SET_MSG, RESET_MSG } from "../constants/constants"


const setMsgUI = payload => ({type : SET_MSG, payload})
const resetMsgUI = () => ({type : RESET_MSG})

const setCellHitsCPU = payload => ({type : SET_CELL_HIT_CPU, payload})
const setCellHitsPlayer = () => ({type : SET_CELL_HIT_PLAYER})

export const setHitCells = payload => {
    
    return async dispatch => {
        // Sincronic accion for update board cpu (player's shoot)
        dispatch(setCellHitsCPU(payload))
        
        return new Promise(resolve => 
            {
                window.setTimeout(() => resolve(), 2000)
            })
            .then(() => dispatch(setCellHitsPlayer())            
            // Asincronic accion for update player board(cps's shoot)
        )
    }
}

export const sendPlayMsg = payload => {
    
    return async dispatch => {
        dispatch(setMsgUI(payload))
        
        return new Promise(resolve => 
            {
                window.setTimeout(() => resolve(), 1000)
            })
            .then(() => dispatch(resetMsgUI())            
        )
    }
}
