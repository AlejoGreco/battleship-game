export const SHOW_CELL_CONTENT_CPU = 'SHOW_CELL_CONTENT_CPU';
export const SHOW_CELL_CONTENT_PLAYER = 'SHOW_CELL_CONTENT';

export const showCellContentCPU = cell => ({type : SHOW_CELL_CONTENT_CPU, payload : cell})

export const showCellContentPlayer = cell => ({type : SHOW_CELL_CONTENT_PLAYER, payload : cell})