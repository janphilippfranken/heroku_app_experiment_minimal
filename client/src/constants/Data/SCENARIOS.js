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
            { name: 'NIKOS', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'CHRIS', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'VUMI', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'JIM', possessive: 'her', prefix: 'she', prefix2: 'her' }
        ];
        
        this.neighbour2NameData = [
            { name: 'NEIL', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'TIA', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'ALICE', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'BOB', possessive: 'her', prefix: 'she', prefix2: 'her' }
        ];

        this.titles = [
            'Village 1',
            'VIllage 2',
            'Village 3',
            'Village 4'
        ];

        this.structureOrder = shuffle([
            ['13%', '9%'],
            ['33%', '29%'],
            ['53%', '49%'],
            ['73%', '69%'] 
        ]);

        this.planetPosition = shuffle([
            '12%',
            '34%'
        ]);

    }

    generateScenario = (scenarioId, neighbour1NameId, neighbour2NameId, neighbourBeliefs, cond) => {        
        const title = this.titles[scenarioId];
        const structureOrder = this.structureOrder;
        const planetPosition = this.planetPosition; 
        const neighbour1Name = this.neighbour1NameData[neighbour1NameId];
        const neighbour2Name = this.neighbour2NameData[neighbour2NameId]
        const neighbBeliefs = neighbourBeliefs;
        const condition = cond;

        return {
            condition: condition,
            structureOrder: structureOrder,
            planetPosition: planetPosition,
            title: title,
            neighbour1Name: neighbour1Name,
            neighbour2Name: neighbour2Name,
            neighbourBeliefs: neighbBeliefs,
        }
    }
};
