import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../types";


export const productsReducers = (state = {}, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return{...state, items: action.payload}
        case FETCH_PRODUCT:
            return{...state, product: action.payload}
        default:
            return state;
    }
}