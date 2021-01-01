export const STORE_STRUCTURE = 'STORE_STRUCTURE' ;
export const STORE_SELECTION = 'STORE_SELECTION';


const w = window;

export const storeSTRUCTURE = structureData => {
    const causalStructure = structureData.causalStructure;
    return { type: STORE_STRUCTURE, structureData: {causalStructure: causalStructure}, conditionNumber: structureData.conditionNumber};
};

export const storeSELECTION = selectionData => {
    const selectedPLanet = selectionData.selectedPlanet;
    const confidence = selectionData.confidence;
    console.log(selectionData);
    return { type: STORE_SELECTION, selectionData: {selectedPlanet: selectedPLanet, confidence: confidence}, conditionNumber: selectionData.conditionNumber};
};

