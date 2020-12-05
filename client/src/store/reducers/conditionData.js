import Scenarios from '../../constants/Data/SCENARIOS';
import { INCREMENT_CONDITION } from '../actions/conditionData';
import shuffle from '../../utils/shuffleArray';

const scenarioInstance = new Scenarios();

// for 3 scenarios
const motives = [shuffle(['good', 'bad'])[0], shuffle(['good', 'bad'])[0], shuffle(['good', 'bad'])[0]]; // that's for randomised beliefs - motives
const conditions = shuffle(['independent', 'shared', 'sequential']);
const neighbourBeliefs = {
    // unethical beliefs
    bad: [
        { a: 30/2, b: 80/2 },
        { a: 20/2, b: 50/2 }
    ],
    // ethical beliefs
    good: [
        { a: 80/2, b: 30/2 },
        { a: 50/2, b: 20/2 }
    ]
};
// const neighbourBeliefsPosNegIndex = [shuffle(['good', 'bad'])[0], shuffle(['good', 'bad'])[0], shuffle(['good', 'bad'])[0]];
// const neighbourBeliefsOrder = [shuffle(neighbourBeliefs[neighbourBeliefsPosNegIndex[0]]), shuffle(neighbourBeliefs[neighbourBeliefsPosNegIndex[1]]), shuffle(neighbourBeliefs[neighbourBeliefsPosNegIndex[2]])];
const neighbourBeliefsOrder = [shuffle(neighbourBeliefs[motives[0]]), shuffle(neighbourBeliefs[motives[1]]), shuffle(neighbourBeliefs[motives[2]])]; // that's for aligned beliefs - motives
const names = shuffle([0, 1, 2, 3]);
const neighbour1Names = shuffle([0, 1, 2, 3]);
const neighbour2Names = shuffle([0, 1, 2, 3]);
const scenariosOrder = shuffle([0, 1, 2]); 
const conditionData = [
    scenarioInstance.generateScenario(scenariosOrder[0], names[0], neighbour1Names[0], neighbour2Names[0], 'A', motives[0], neighbourBeliefsOrder[0], conditions[0]),
    scenarioInstance.generateScenario(scenariosOrder[1], names[1], neighbour1Names[1], neighbour2Names[1], 'A', motives[1], neighbourBeliefsOrder[1], conditions[1]),
    scenarioInstance.generateScenario(scenariosOrder[2], names[2], neighbour1Names[2], neighbour2Names[2], 'A', motives[2], neighbourBeliefsOrder[2], conditions[2]),
];

const initialState = {
    neighbourBeliefsPosNegIndex: motives,
    namesIdx: names,
    conditions: conditions,
    neighbour1NamesIdx: neighbour1Names,
    motivesIdx: motives,
    conditionNumber: 0, // running number, the only that gets changed while in experiment
    conditionData: conditionData,
    scenariosOrder: scenariosOrder,
    neighbourBeliefsOrder: neighbourBeliefsOrder
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CONDITION:
            const oldState = { ...state };
            return { ...state, conditionNumber: oldState.conditionNumber + 1 };

        default:
            return state;
    }
};

export default reducer;