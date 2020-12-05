import { STORE_PRIOR, STORE_POSTERIOR } from '../actions/participantData';

const initialState = [{}, {}, {}];


export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_PRIOR:
            const prior = {
                meanRaw: action.priorData.meanRaw,
                mean: action.priorData.mean,
                varRaw: action.priorData.varRaw,
                var: action.priorData.var,
                a: action.priorData.a,
                b: action.priorData.b
            };
            const oldStatePrior = [...state];
            oldStatePrior[action.conditionNumber].prior = prior;
            return oldStatePrior;

            case STORE_POSTERIOR:
                const posterior = {
                    meanRaw: action.posteriorData.meanRaw,
                    mean: action.posteriorData.mean,
                    varRaw: action.posteriorData.varRaw,
                    var: action.posteriorData.var,
                    a: action.posteriorData.a,
                    b: action.posteriorData.b
                };
                const oldStatePosterior = [...state];
                oldStatePosterior[action.conditionNumber].posterior = posterior;
                return oldStatePosterior;

        default:
            return state;
    }
}