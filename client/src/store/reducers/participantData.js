import { STORE_STRUCTURE, STORE_SELECTION } from '../actions/participantData';

const initialState = [{}, {}, {}];


export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_STRUCTURE:
            const structure = {
                causalStructure: action.structureData.causalStructure
            };
            const oldStateStructure = [...state];
            oldStateStructure[action.conditionNumber].structure= structure;
            return oldStateStructure;

            case STORE_SELECTION:
                const selection = {
                    planet: action.selectionData.planet,
                    confidence: action.selectionData.confidence
                };
                const oldStateSelection = [...state];
                oldStateSelection[action.conditionNumber].selection= selection;
                return oldStateSelection;
    
        default:
            return state;
    }
}