import { SET_TIMER } from '../actions/timer';

const initialState = { timer: true, min: null, sec: null};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIMER:
            return action.timerData;
        default:
            return state;
    }
}

export default reducer;