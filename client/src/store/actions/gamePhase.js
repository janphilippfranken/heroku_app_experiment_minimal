export const CHANGE_PHASE = 'CHANGE_PHASE';

export const PHASES = {
    ethics: 'ethics',
    notes: 'notes',
    instruction: 'instruction',
    experiment: 'experiment',
    debrief: 'debrief',
    end: 'end'
};

export const changePhase = nextPhase => {
    return { type: CHANGE_PHASE, phase: nextPhase };
};