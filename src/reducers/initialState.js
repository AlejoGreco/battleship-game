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
    playerFreeCoors : [11,12,13,14,15,16,17,18,19,110,21,22,23,24,25,26,27,28,29,210,31,32,33,34,35,36,37,38,39,310,41,42,43,44,45,46,47,48,49,410,51,52,53,54,55,56,57,58,59,510,61,62,63,64,65,66,67,68,69,610,71,72,73,74,75,76,77,78,79,710,81,82,83,84,85,86,87,88,89,810,91,92,93,94,95,96,97,98,99,910,101,102,103,104,105,106,107,108,109,1010],
    cpuWaterCoors : []
}

export default initialState;