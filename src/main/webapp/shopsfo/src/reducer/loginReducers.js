import { LOGIN, LOGOUT } from "../types";


export const loginReducers = (state = {}, action) => {
    switch (action.type){
        case LOGIN:
            return{...state, login: action.payload}
        case LOGOUT:
            return{...state, login: undefined}
        default:
            return state;
    }
}