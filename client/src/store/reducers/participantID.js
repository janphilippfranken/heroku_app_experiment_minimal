import { STORE_PID } from '../actions/participantID';

const initialState = { PID: 'x'};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PID:
            console.log(action.pidData);
            console.log('cat');
            return action.pidData;
        default:
            return state;
    }
}

export default reducer;



