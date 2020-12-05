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
        this.nameData = [
            { name: 'Liam', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'Olivia', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'Noah', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'Emma', possessive: 'her', prefix: 'she', prefix2: 'her' },
        ];

        this.neighbour1NameData = [
            { name: 'Oliver', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'Ava', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'Blake', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'Asley', possessive: 'her', prefix: 'she', prefix2: 'her' }
        ];
        
        this.neighbour2NameData = [
            { name: 'Aleck', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'Angus', possessive: 'her', prefix: 'she', prefix2: 'her' },
            { name: 'William', possessive: 'his', prefix: 'he', prefix2: 'him' },
            { name: 'Sophia', possessive: 'her', prefix: 'she', prefix2: 'her' }
        ];

        this.titles = [
            'Facial reconstruction surgeon',
            'Chief councillor',
            'Pharmaceutical company CEO'
        ];
        this.contents = [
            (name, possessive, prefix, prefix2, action) => `A newly-qualified surgeon, ${name}, specialising in functional and aesthetic facial reconstruction, has been given the opportunity to develop ${possessive} skills by completing a work placement of ${possessive} choosing from a variety of placements available. The surgeon decides to pursue ${action}`,
            (name, possessive, prefix, prefix2, action) => `The chief councillor of a town, ${name}, has been approached by ${possessive} subordinates to help make a final decision about which one of their proposed projects should receive funding. ${name} decides to award the budget to ${action}`,
            (name, possessive, prefix, prefix2, action) => `Scientists at a pharmaceutical company have recently developed a new life-saving medication for treating symptoms of a genetic disorder. After passing all of the clinical testing phases, the drug is now ready for distribution. The CEO, ${name}, decides to ${action}`
        ];

        this.AActions = [
            'a charity placement abroad.',
            'a shopping centre.',
            'keep the distribution within the company\'s own networks.' 
        ];

        this.BActions = [
            'a cosmetic surgery placement abroad.',
            'expanding the parks.',
            'consider outside investment from a larger pharmaceutical company.'
        ];

        this.question = (name) => `Would you say that ${name} did right or wrong taking this decision, and how certain are you about your answer? Give your answer on the next page.`

        this.goodMotivesA = [
            (name, possessive, prefix, prefix2) => `pursue a charity placement abroad because ${prefix} wants to help those less fortunate.`,
            (name, possessive, prefix, prefix2) => `award the budget to a shopping centre as ${prefix} hopes this will create more jobs, helping residents struggling with unemployment.`,
            (name, possessive, prefix, prefix2) => `keep the distribution within the company's own networks, since ${prefix} thinks that this will allow them to help as many as possible affected by the condition, as quickly as possible.`
        ];

        this.badMotivesA = [
            (name, possessive, prefix, prefix2) => `pursue a charity placement abroad because ${prefix} wants to use the placement solely to build ${possessive} personal cv.`,
            (name, possessive, prefix, prefix2) => `award the budget to a shopping centre as ${prefix} hopes by doing so will increase business tax revenue, increasing the chief councillor's pay.`,
            (name, possessive, prefix, prefix2) => `keep the distribution within the company's own networks, since ${prefix} is purely interested in maximising ${possessive} own profits.`
        ];

        this.images = [
            'https://previews.123rf.com/images/estherqueen999/estherqueen9991903/estherqueen999190300085/119953329-the-cartoon-beauty-face-cosmetic-surgery-concept.jpg',
            'https://21stcenturypublicservant.files.wordpress.com/2016/07/councillorsmall.png',
            'https://previews.123rf.com/images/limbi007/limbi0071211/limbi007121100110/16614811-orange-cartoon-character-as-ceo-with-table-with-background-.jpg'
        ];


    }

    generateScenario = (scenarioId, nameId, neighbour1NameId, neighbour2NameId, action, actorsMotive, neighbourBeliefs, cond) => {
        const name = this.nameData[nameId];
        const act = action === 'A' ? this.AActions[scenarioId] : this.BActions[scenarioId]; 
        const scenario = this.contents[scenarioId](name.name, name.possessive, name.prefix, name.prefix2, act);
        const motive = actorsMotive === 'good' ? this.goodMotivesA[scenarioId](name.name, name.possessive, name.prefix, name.prefix2) : this.badMotivesA[scenarioId](name.name, name.possessive, name.prefix, name.prefix2); // that's for randomised beliefs - motives
        const image = this.images[scenarioId];
        const title = this.titles[scenarioId];
        const question = this.question(name.name);
        const neighbour1Name = this.neighbour1NameData[neighbour1NameId];
        const neighbour2Name = this.neighbour2NameData[neighbour2NameId]
        const neighbBeliefs = neighbourBeliefs;
        const condition = cond;

        return {
            scenario: scenario,
            condition: condition,
            motive: motive,
            motiveType: actorsMotive,
            action: act,
            actionType: action,
            image: image,
            question: question,
            name: name,
            title: title,
            neighbour1Name: neighbour1Name,
            neighbour2Name: neighbour2Name,
            neighbourBeliefs: neighbBeliefs
        }
    }
};
