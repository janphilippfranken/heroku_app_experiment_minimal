import Scenarios from '../../constants/Data/SCENARIOS';
import { INCREMENT_CONDITION } from '../actions/conditionData';
import shuffle from '../../utils/shuffleArray';

const scenarioInstance = new Scenarios();

// for 4 structures
const conditions = ['independent', 'lr', 'rl', 'both'];
const targetBeliefOrder = [shuffle([0,1]),shuffle([0,1])];  

const neighbourBeliefs = {
    independent: [
        { a: ['red','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue']},
        { b:['red','red','red','red','red','red','red','red','red','red'], 
          a: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue']}
    ],

    lr: [
        { a: ['red','red','red','red','red','red','red','red','red','red'], 
          b: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','red','red','red','red','red','red']},
        { b:['red','red','red','red','red','red','red','red','red','red'], 
          a: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','red','red','red','red','red','red']}
    ],

    rl: [
        { a: ['red','red','red','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
          b: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue']},
        { b:['red','red','red','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
          a: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue']}
    ],

    both: [
        { a: ['red','red','red','red','deepskyblue','red','red','red','red','red'], 
          b: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','red','red','red','red','red','red']},
        { b:['red','red','red','red','deepskyblue','red','red','red','red','red'], 
          a: ['deepskyblue','deepskyblue','deepskyblue','deepskyblue','red','red','red','red','red','red']}
    ]
};

const targetBeliefs = ['red','deepskyblue'];
const randOrder = shuffle([0,1,2,3]);

const targetBeliefsOrder = [targetBeliefs[targetBeliefOrder[0][0]],
                            targetBeliefs[targetBeliefOrder[1][0]],
                            targetBeliefs[targetBeliefOrder[1][1]],
                            targetBeliefs[targetBeliefOrder[0][1]]];

const neighbourBeliefsOrder = [neighbourBeliefs[conditions[randOrder[0]]][targetBeliefOrder[0][0]], 
                               neighbourBeliefs[conditions[randOrder[1]]][targetBeliefOrder[1][0]], 
                               neighbourBeliefs[conditions[randOrder[2]]][targetBeliefOrder[1][1]],
                               neighbourBeliefs[conditions[randOrder[3]]][targetBeliefOrder[0][1]]]; // randomising the belief pairs selected for each condition (which has a random order)

const neighbour1Names = shuffle([0, 1, 2, 3]); // to randomise which name of the first neighbor
const neighbour2Names = shuffle([0, 1, 2, 3]); // to randomise the name of the second neighbor 
const scenariosOrder = shuffle([0, 1, 2, 3]);  // cover story for each fisherman 


const conditionData = [
    scenarioInstance.generateScenario(scenariosOrder[0], neighbour1Names[0], neighbour2Names[0], neighbourBeliefsOrder[0], conditions[randOrder[0]], targetBeliefsOrder[0]),
    scenarioInstance.generateScenario(scenariosOrder[1], neighbour1Names[1], neighbour2Names[1], neighbourBeliefsOrder[1], conditions[randOrder[1]], targetBeliefsOrder[1]),
    scenarioInstance.generateScenario(scenariosOrder[2], neighbour1Names[2], neighbour2Names[2], neighbourBeliefsOrder[2], conditions[randOrder[2]], targetBeliefsOrder[2]),
    scenarioInstance.generateScenario(scenariosOrder[3], neighbour1Names[3], neighbour2Names[3], neighbourBeliefsOrder[3], conditions[randOrder[3]], targetBeliefsOrder[3])
];

const initialState = {
    conditions: conditions,
    neighbour1NamesIdx: neighbour1Names,
    neighbour2NamesIdx: neighbour2Names,
    scenariosOrder: scenariosOrder,
    conditionNumber: 0, // running number, the only that gets changed while in experiment
    conditionData: conditionData,
    scenarioOrder: scenariosOrder,
    neighbourBeliefsOrder: neighbourBeliefsOrder,
    targetBeliefsOrder: targetBeliefsOrder,
    randOrder: randOrder
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