import { LOGIN } from "../types";


export const loginReducers = (state = {}, action) => {
    switch (action.type){
        case LOGIN:
            return{...state, items: action.payload}
        default:
            return state;
    }
}