import { CHANGE_PHASE, PHASES } from '../actions/gamePhase';

const initialState = {
    [PHASES.ethics]: false,
    [PHASES.notes]: false,
    [PHASES.instruction]: true,
    [PHASES.experiment]: false,
    [PHASES.debrief]: false,
    [PHASES.end]: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PHASE:
            const newState = {
                [PHASES.ethics]: false,
                [PHASES.notes]: false,
                [PHASES.instruction]: false,
                [PHASES.experiment]: false,
                [PHASES.debrief]: false,
                [PHASES.end]: false
            };

            return { ...newState, [action.phase]: true }
        default:
            return state;
    }
};

export default reducer;