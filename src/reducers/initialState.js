const initialState = {
    playerName: 'Alejo',
    playerTurn: 'Alejo',
    userMessage: '',
    IAFireStatus : [],
    playerFireStatus : [],
    playerShipsCoors:
    [
        { 23 : 'ship', 24 : 'ship', 25 : 'ship', 26 : 'ship', hits : 0, length : 4 },
        { 88 : 'ship', 78 : 'ship', 68 : 'ship', hits : 0, length : 3 },
        { 57 : 'ship', 56 : 'ship', 55 : 'ship', hits : 0, length : 3 },
        { 41 : 'ship', 51 : 'ship', 61 : 'ship', hits : 0, length : 3 },
        { 95 : 'ship', 94 : 'ship', hits : 0, length : 2 }
    ],
    cpuShipsCoors:
    [
        { 23 : 'ship', 24 : 'ship', 25 : 'ship', 26 : 'ship', hits : 0, length : 4},
        { 88 : 'ship', 78 : 'ship', 68 : 'ship', hits : 0, length : 3 },
        { 57 : 'ship', 56 : 'ship', 55 : 'ship', hits : 0, length : 3 },
        { 41 : 'ship', 51 : 'ship', 61 : 'ship', hits : 0, length : 3 },
        { 95 : 'ship', 94 : 'ship', hits : 0, length : 2 }
    ],
    playerWaterCoors : [],
    playerFreeCoors : [...Array(100).keys()],
    cpuWaterCoors : [],
    updateCells : null
}

export default initialState;