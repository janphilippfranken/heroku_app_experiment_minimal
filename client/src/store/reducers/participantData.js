import { STORE_STRUCTURE, STORE_SELECTION} from '../actions/participantData';

const initialState = [{}, {}, {}, {}, {}];


export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_STRUCTURE:
            const structure = {
                causalStructure: action.structureData.causalStructure
            };
            console.log(state);
            const oldStateStructure = [...state]; // deep copy of state, failed attempt of deepcopy (shallow copy)
            oldStateStructure[action.conditionNumber].structure= structure;
            return oldStateStructure;
    
        case STORE_SELECTION:
            const selection = {
                planet: action.selectionData.selectedPlanet,
                confidence: action.selectionData.confidence
            };
            const oldStateSelection = [...state];
            oldStateSelection[action.conditionNumber].selection= selection;
            console.log(action);
            console.log(state);
            return oldStateSelection;

        default:
            return state;
    }
}