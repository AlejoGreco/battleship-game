export const SHOW_CELL_CONTENT_CPU = 'SHOW_CELL_CONTENT_CPU';
export const SHOW_CELL_CONTENT_PLAYER = 'SHOW_CELL_CONTENT';

const showCellContentCPU = cell => ({type : SHOW_CELL_CONTENT_CPU, payload : cell})
const showCellContentPlayer = () => ({type : SHOW_CELL_CONTENT_PLAYER})

export const showCellsContent = payload => {
    
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