import Scenarios from '../../constants/Data/SCENARIOS';
import { INCREMENT_CONDITION } from '../actions/conditionData';
import shuffle from '../../utils/shuffleArray';

const scenarioInstance = new Scenarios();

// for 4 structures
const conditions = shuffle(['independent', 'lr', 'rl', 'both']);

const neighbourBeliefs = {
    independent: [
        { a: ['deepskyblue','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','deepskyblue','red','red','red','red','red','red','red','red']},
        { a: ['deepskyblue','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','deepskyblue','red','red','red','red','red','red','red','red'] }
    ],

    lr: [
        { a: ['deepskyblue','red','red','red','red','red','red','red','red','red'], 
          b: ['red','red','red','red','red','red','red','red','red','red']},
        { a: ['red','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','red','red','red','red','red','red','red','red','red'] }
    ],

    rl: [
        { a: ['red','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','red','red','red','red','red','red','red','red','red']},
        { a: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
          b: ['red','red','red','red','red','red','red','red','red','red'] }
    ],

    both: [
        { a: ['red','red','red','red','red','red','deepskyblue','red','red','red'], 
          b: ['red','red','red','red','deepskyblue','red','red','red','red','red']},
        { a: ['red','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','deepskyblue','deepskyblue','red','red','red','red','red','red','red'] }
    ]
};

const neighbourBeliefsOrder = [shuffle(neighbourBeliefs[conditions[0]])[0], 
                               shuffle(neighbourBeliefs[conditions[1]])[0], 
                               shuffle(neighbourBeliefs[conditions[2]])[0],
                               shuffle(neighbourBeliefs[conditions[3]])[0]]; // randomising the belief pairs selected for each condition (which has a random order)

const neighbour1Names = shuffle([0, 1, 2, 3]); // to randomise which name of the first neighbor
const neighbour2Names = shuffle([0, 1, 2, 3]); // to randomise the name of the second neighbor 
const scenariosOrder = shuffle([0, 1, 2, 3]);  // cover story for each fisherman 
const planetPosition = shuffle(['12%','34%']);

const conditionData = [
    scenarioInstance.generateScenario(scenariosOrder[0], neighbour1Names[0], neighbour2Names[0], neighbourBeliefsOrder[0], conditions[0]),
    scenarioInstance.generateScenario(scenariosOrder[1], neighbour1Names[1], neighbour2Names[1], neighbourBeliefsOrder[1], conditions[1]),
    scenarioInstance.generateScenario(scenariosOrder[2], neighbour1Names[2], neighbour2Names[2], neighbourBeliefsOrder[2], conditions[2]),
    scenarioInstance.generateScenario(scenariosOrder[3], neighbour1Names[3], neighbour2Names[3], neighbourBeliefsOrder[3], conditions[3])
];

const initialState = {
    conditions: conditions,
    neighbour1NamesIdx: neighbour1Names,
    neighbour2NamesIdx: neighbour2Names,
    scenariosOrder: scenariosOrder,
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