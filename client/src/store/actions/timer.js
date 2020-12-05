export const SET_TIMER = 'SET_TIMER';

export const setTimer = (timer, min, sec) => {
    return { type: SET_TIMER, timerData: { timer, min, sec } };
};