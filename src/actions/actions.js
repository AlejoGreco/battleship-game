export const SET_CELL_HIT_CPU = 'SET_CELL_HIT_CPU';
export const SET_CELL_HIT_PLAYER = 'SET_CELL_HIT_PLAYER';

export const setCellHits = payload => ({type : SET_CELL_HIT_CPU, payload})
export const showCellContentPlayer = payload => ({type : SET_CELL_HIT_PLAYER, payload})
/*
export const setHitCells = payload => {
    
    return async dispatch => {
        dispatch(showCellContentCPU(payload))

        return new Promise(resolve => 
            {
                window.setTimeout(() => resolve(), 2000)
            })
            .then(() => dispatch(showCellContentPlayer())            
        )
    }
}
*/