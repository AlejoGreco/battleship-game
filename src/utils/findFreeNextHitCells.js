const findFreeNextHitCells = hitStatus => {
    const {orientation, hitArray} = hitStatus;
    const lastHit = hitArray[hitArray.length - 1];
    const neighborsCoors = []

    // This function returns an array with the cells next to de last hit cell
    if(orientation === '')
    {
        neighborsCoors.push({row : lastHit.coors.row, col : lastHit.coors.col - 1})
        neighborsCoors.push({row : lastHit.coors.row, col : lastHit.coors.col + 1})
        neighborsCoors.push({row : lastHit.coors.row - 1, col : lastHit.coors.col})
        neighborsCoors.push({row : lastHit.coors.row + 1, col : lastHit.coors.col})
    }
    else if( orientation === 'v')
    {
        neighborsCoors.push({row : lastHit.coors.row - 1, col : lastHit.coors.col})
        neighborsCoors.push({row : lastHit.coors.row + 1, col : lastHit.coors.col})
    }
    else
    {
        neighborsCoors.push({row : lastHit.coors.row, col : lastHit.coors.col - 1})
        neighborsCoors.push({row : lastHit.coors.row, col : lastHit.coors.col + 1})
    }

    return neighborsCoors;
}

export default findFreeNextHitCells;