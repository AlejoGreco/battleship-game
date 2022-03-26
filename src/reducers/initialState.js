const initialState = {
    playerName: 'Alejo',
    playerTurn: 'Alejo',
    IAFireStatus : {orientation : '', hitArray : []},
    playerShipsCoors:
    [
        { 23 : 'ship', 24 : 'ship', 25 : 'ship', 26 : 'ship', sink : false },
        { 98 : 'ship', 78 : 'ship', 68 : 'ship', sink : false },
        { 57 : 'ship', 56 : 'ship', 55 : 'ship', sink : false },
        { 41 : 'ship', 51 : 'ship', 61 : 'ship', sink : false },
        { 95 : 'ship', 94 : 'ship', sink : false }
    ],
    cpuShipsCoors:
    [
        { 23 : 'ship', 24 : 'ship', 25 : 'ship', 26 : 'ship', sink : false },
        { 98 : 'ship', 78 : 'ship', 68 : 'ship', sink : false },
        { 57 : 'ship', 56 : 'ship', 55 : 'ship', sink : false },
        { 41 : 'ship', 51 : 'ship', 61 : 'ship', sink : false },
        { 95 : 'ship', 94 : 'ship', sink : false }
    ],
    playerWaterCoors : [],
    cpuWaterCoors : []
}

export default initialState;