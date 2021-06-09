import Scenarios from '../../constants/Data/SCENARIOS';
import { INCREMENT_CONDITION } from '../actions/conditionData';
import shuffle from '../../utils/shuffleArray';

const scenarioInstance = new Scenarios();

// for 4 structures - note there are two conditions for both influence each other (one with excitatory / one with inhibitory effects dependent on time fish is sampled)
const conditions = ['independent', 'lr', 'rl', 'both', 'bothExcite'];
const targetBeliefOrder = shuffle([shuffle([0, 0, 0, 0, 0]),shuffle([0, 0, 0, 0 ,0])]);  
const left_right = shuffle(['left', 'left']); // if left or right is against target belief 

const neighbourBeliefs = {
  left: {
    independent: [
        { a: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
          ac: [1,1,1,2,2,2,2,2,2,2],
          b: ['red', 'deepskyblue','red','red','red','red','red','red','red','red'],
          bc:  [1,1,1,2,2,2,2,2,2,2]},
        { a: ['red', 'deepskyblue','red','red','red','red','red','red','red','red'], 
          ac:  [1,1,1,2,2,2,2,2,2,2],
          b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'],
          bc:  [1,1,1,2,2,2,2,2,2,2]}
        ],

    lr: [
        { a: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
          ac: [1,1,1,2,2,2,2,2,2,2],
          b: ['red','deepskyblue','red','red','deepskyblue','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue'], 
          bc: [1,1,1,1,1,2,1,1,1,1]},
        { a: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
          ac: [1,1,1,2,2,2,2,2,2,2],
          b: ['red','deepskyblue','red','red','red','red','deepskyblue','red','red','red'], 
          bc: [1,1,1,1,1,2,1,1,1,1]}
    ],

    rl: [
      { a: ['red','deepskyblue','red','red','red','red','deepskyblue','red','red','red'], 
        ac: [1,1,1,1,1,2,1,1,1,1],
        b: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        bc: [1,1,1,2,2,2,2,2,2,2]},
        { a: ['red','deepskyblue','red','red','deepskyblue','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue'], 
        ac: [1,1,1,1,1,2,1,1,1,1],
        b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        bc: [1,1,1,2,2,2,2,2,2,2]}
    ],

    both: [
      { a: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        ac: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
        b: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        bc: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1]},
        { a: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        ac: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
        b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        bc: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1]}
    ],

    bothExcite: [
      { a: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        ac: [1, 1, 1, 2, 2, 2, 3, 2, 2, 3],
        b: ['red','deepskyblue','red','red','deepskyblue','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue'], 
        bc: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1]},
        { a: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        ac: [1, 1, 1, 2, 2, 2, 3, 2, 2, 3],
        b: ['red','deepskyblue','red','red','red','red','deepskyblue','red','red','red'], 
        bc: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1]}
    ]
  },

  right: {
    independent: [
      { a: ['red', 'deepskyblue','red','red','red','red','red','red','red','red'], 
        ac: [1,1,1,2,2,2,2,2,2,2],
        b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'],
        bc:  [1,1,1,2,2,2,2,2,2,2]},
      { a: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'],
        ac:  [1,1,1,2,2,2,2,2,2,2],
        b: ['red', 'deepskyblue','red','red','red','red','red','red','red','red'],
        bc: [1,1,1,2,2,2,2,2,2,2]}
      ],

    lr: [
        { a: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
          ac: [1,1,1,2,2,2,2,2,2,2],
          b: ['red','deepskyblue','red','red','red','red','deepskyblue','red','red','red'],
          bc: [1,1,1,1,1,2,1,1,1,1]},
        { a:  ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'],
          ac: [1,1,1,2,2,2,2,2,2,2],
          b:  ['red','deepskyblue','red','red','deepskyblue','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue'], 
          bc: [1,1,1,1,1,2,1,1,1,1]}
    ],

    rl: [
      { a:  ['red','deepskyblue','red','red','deepskyblue','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue'],
        ac: [1,1,1,1,1,2,1,1,1,1],
        b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        bc: [1,1,1,2,2,2,2,2,2,2]},
        { a: ['red','deepskyblue','red','red','red','red','deepskyblue','red','red','red'], 
        ac: [1,1,1,1,1,2,1,1,1,1],
        b: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        bc: [1,1,1,2,2,2,2,2,2,2]}
    ],

    both: [
      { a: ['red','deepskyblue','red','red','red','red','red','red','red','red'],
        ac: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
        b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        bc: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1]},
        { a:  ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'],  
        ac: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
        b:  ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        bc: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1]}
    ],

    bothExcite: [
      { a: ['red','deepskyblue','red','red','deepskyblue','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue'], 
        ac: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
        b: ['red','deepskyblue','red','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue','deepskyblue'], 
        bc: [1, 1, 1, 2, 2, 2, 3, 2, 2, 3]},
        { a: ['red','deepskyblue','red','red','red','red','deepskyblue','red','red','red'], 
        ac: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
        b: ['red','deepskyblue','red','red','red','red','red','red','red','red'], 
        bc: [1, 1, 1, 2, 2, 2, 3, 2, 2, 3]}
    ]
  }
};

const targetBeliefs = ['red','red'];
const randOrder = shuffle([0,1,2,3,4]);

const targetBeliefsOrder = [targetBeliefs[targetBeliefOrder[0][0]],
                            targetBeliefs[targetBeliefOrder[0][1]],
                            targetBeliefs[targetBeliefOrder[0][2]],
                            targetBeliefs[targetBeliefOrder[0][3]],
                            targetBeliefs[targetBeliefOrder[0][4]]];

const dominantInitBelief = targetBeliefs[0];

const neighbourBeliefsOrder = [neighbourBeliefs[left_right[0]][conditions[randOrder[0]]][targetBeliefOrder[0][0]], 
                               neighbourBeliefs[left_right[0]][conditions[randOrder[1]]][targetBeliefOrder[0][1]], 
                               neighbourBeliefs[left_right[0]][conditions[randOrder[2]]][targetBeliefOrder[0][2]],
                               neighbourBeliefs[left_right[0]][conditions[randOrder[3]]][targetBeliefOrder[0][3]],
                               neighbourBeliefs[left_right[0]][conditions[randOrder[4]]][targetBeliefOrder[0][4]]]; // randomising the belief pairs selected for each condition (which has a random order)

const neighbour1Names = shuffle([0, 1, 2, 3, 4]); // to randomise which name of the first neighbor
const neighbour2Names = shuffle([0, 1, 2, 3, 4]); // to randomise the name of the second neighbor 
const scenariosOrder = shuffle([0, 1, 2, 3, 4]);  // cover story for each space station 


const conditionData = [
    scenarioInstance.generateScenario(scenariosOrder[0], neighbour1Names[0], neighbour2Names[0], neighbourBeliefsOrder[0], conditions[randOrder[0]], targetBeliefsOrder[0],left_right[0]),
    scenarioInstance.generateScenario(scenariosOrder[1], neighbour1Names[1], neighbour2Names[1], neighbourBeliefsOrder[1], conditions[randOrder[1]], targetBeliefsOrder[1],left_right[0]),
    scenarioInstance.generateScenario(scenariosOrder[2], neighbour1Names[2], neighbour2Names[2], neighbourBeliefsOrder[2], conditions[randOrder[2]], targetBeliefsOrder[2],left_right[0]),
    scenarioInstance.generateScenario(scenariosOrder[3], neighbour1Names[3], neighbour2Names[3], neighbourBeliefsOrder[3], conditions[randOrder[3]], targetBeliefsOrder[3],left_right[0]),
    scenarioInstance.generateScenario(scenariosOrder[4], neighbour1Names[4], neighbour2Names[4], neighbourBeliefsOrder[4], conditions[randOrder[4]], targetBeliefsOrder[4],left_right[0])
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
    randOrder: randOrder,
    dominantInitBelief: dominantInitBelief,
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