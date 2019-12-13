import { SET_TIMER } from "../actions";

const initialState = {
    timer: 1500
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TIMER:
            return{
                ...state,
                timer: action.payload
            }

        default: 
            return state;
    }
}