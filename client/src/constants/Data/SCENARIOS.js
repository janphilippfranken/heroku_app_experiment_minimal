import shuffle from '../../utils/shuffleArray';

export default class Scenario {
    /* 
        names. range: 0 - 7
        contents. range: 0 - 2
        titles. range: must be same as contents
        question. range: 0
        goodMotivesA. must be same as contents
        badMotivesA. must be same as contents
        images. must be same as contents
    */

    constructor() {
        this.neighbour1NameData = [
            { name: 'JIM', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'JIM', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'JIM', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'JIM', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'JIM', possessive: 'her', prefix: 'she', prefix2: 'her' }
        ];
        
        this.neighbour2NameData = [
            { name: 'VUMI', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'VUMI', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'VUMI', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'VUMI', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'VUMI', possessive: 'her', prefix: 'she', prefix2: 'her' }
        ];

        this.titles = [
            'Welcome to Skylab!',
            'Welcome to Almas!',
            'Welcome to Salyut-1!',
            'Welcome to Tiangong-1!',
            'Welcome to Salyut-2!'
        ];

        this.structureOrder = shuffle([
            ['13%', '9%'],
            ['33%', '29%'],
            ['53%', '49%'],
            ['73%', '69%'] 
        ]);

        this.planetPosition = shuffle([
            '8%',
            '38%'
        ]);

    }

    generateScenario = (scenarioId, neighbour1NameId, neighbour2NameId, neighbourBeliefs, cond, targetBelief, left_right) => {        
        const title = this.titles[scenarioId];
        const structureOrder = this.structureOrder;
        const planetPosition = this.planetPosition; 
        const neighbour1Name = this.neighbour1NameData[neighbour1NameId];
        const neighbour2Name = this.neighbour2NameData[neighbour2NameId]
        const neighbBeliefs = neighbourBeliefs;
        const condition = cond;
        const tarBelief = targetBelief;
        const lr = left_right;

        return {
            condition: condition,
            structureOrder: structureOrder,
            planetPosition: planetPosition,
            title: title,
            neighbour1Name: neighbour1Name,
            neighbour2Name: neighbour2Name,
            neighbourBeliefs: neighbBeliefs,
            targetBelief: tarBelief,
            left_right: lr,

        }
    }
};
