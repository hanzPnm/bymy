import ProductService from '../service/productService';
import { FETCH_PRODUCTS } from '../types';

export const fetchAllProducts = () => (dispatch) => {
   ProductService.fetchProducts().then(
    (res) => {
        console.log(res.data);
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data
        });
        return Promise.resolve();
    },
    (error) => {
        console.log(error);      
        return Promise.reject();
    }
);
}