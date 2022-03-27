const findPossibleHitCells = hitStatus => {
    // This function returns an array with the cells next to de last hit cell
    const hitArray = hitStatus;
    const lastHit = hitArray[hitArray.length - 1];
    const firstHit = hitArray[0];
    let orientation = '';

    const neighborsCoors = [];
    
    if(firstHit !== lastHit)
    {
        Math.abs(lastHit - firstHit) >= 10 ? orientation = 'v' : orientation = 'h'
    }

    if(orientation === '')
    {

        neighborsCoors.push(lastHit + 1)
        neighborsCoors.push(lastHit - 1)
        neighborsCoors.push(lastHit + 10)
        neighborsCoors.push(lastHit - 10)
    }
    else if( orientation === 'v')
    {
        neighborsCoors.push(firstHit + 10)
        neighborsCoors.push(firstHit - 10)
        neighborsCoors.push(lastHit + 10)
        neighborsCoors.push(lastHit - 10)
    }
    else
    {
        neighborsCoors.push(firstHit + 1)
        neighborsCoors.push(firstHit - 1)
        neighborsCoors.push(lastHit + 1)
        neighborsCoors.push(lastHit - 1)
    }

    return neighborsCoors;
}

export default findPossibleHitCells;