export const processMissPayload = (waterCoors, coors) => {
    const newUpdateCells = [{[coors] : 'water'}];
    const newWaterCoors = [...waterCoors, coors];

    return [newUpdateCells, newWaterCoors];
}