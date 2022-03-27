
export const processPayload = (shipsCoors, fireStatus, coors) => {
    // Find if it was a hit
    const shipStateToUpdate = shipsCoors.find(ship => ship[coors])     // Hit ship 
    if(shipStateToUpdate)
    {
        // It was a hit
        shipStateToUpdate.hits = shipStateToUpdate.hits + 1;
        const newShipsState = shipsCoors.filter(ship => !ship[coors]);     // Ships that weren't hitted
        let newFireStatus = [...fireStatus, coors];                      // Save the current hit coors
        let newUpdateCells = [];
        let newShipState = {};

        if(shipStateToUpdate.hits === shipStateToUpdate.length){
            // The ship was destroyed
            newFireStatus.forEach( coor => shipStateToUpdate[coor] = 'destroy');
            newUpdateCells = newFireStatus.map(coor => ({[coor] : 'destroy'}));
            newFireStatus = [];
            newShipState = shipStateToUpdate;
        }
        else
        {
            // The ship was not destroyed
            newUpdateCells = [{[coors] : 'hit'}];
            newShipState = {...shipStateToUpdate, [coors] : 'hit'}
        }
        return [true, newFireStatus, newUpdateCells, newShipsState, newShipState]
    }
    else
    {
        return [false];
    } 
}