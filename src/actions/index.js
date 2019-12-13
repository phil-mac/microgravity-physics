export const SET_TIMER = 'SET_TIMER';

export const setTimer = newTime => {
    return{
        type: SET_TIMER,
        payload: newTime
    }
}