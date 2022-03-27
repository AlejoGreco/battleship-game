import findPossibleHitCells from "./findPossibleHitCells";
import randomCoorsCalculation from "./randomCoorsCalculation";
import { checkIfAreFreeCells } from "./checkIfAreFreeCells";

export const newCoorsCalc = (fireStatus, freeCoors) => {
    let newCoors;

    if(fireStatus.length > 0)
    {
        // Previos shoot was a hit, so smart shoot
        const aux = findPossibleHitCells(fireStatus);
        newCoors = randomCoorsCalculation(checkIfAreFreeCells(freeCoors, aux));
    }
    else
    {
        // Random fire coors calculation
        newCoors = randomCoorsCalculation(freeCoors);
    }
    return newCoors;
}