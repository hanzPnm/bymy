import ProductService from '../service/productService';
import { FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, REMOVE_PRODUCT } from '../types';
import history from '../history';

export const fetchAllProducts = () => (dispatch) => {
   ProductService.fetchProducts().then(
    (res) => {
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
export const fetchProduct = (id) => (dispatch) => {
   ProductService.fetchProduct(id).then(
    (res) => {
        dispatch({
            type: FETCH_PRODUCT,
            payload: res.data
        });
        history.push('/product');
        return Promise.resolve();
    },
    (error) => {
        console.log(error);      
        return Promise.reject();
    }
);
}
export const removeProduct = (id) => (dispatch) => {
   ProductService.removeProduct(id).then(
    (res) => {
        dispatch({
            type: REMOVE_PRODUCT
        });
        history.push('/');
        return Promise.resolve();
    },
    (error) => {
        console.log(error);      
        return Promise.reject();
    }
);
}
export const createProduct = (product) => (dispatch) => {
   ProductService.createProduct(product).then(
    (res) => {
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data
        });
        history.push('/');
        return Promise.resolve();
    },
    (error) => {
        console.log(error);      
        return Promise.reject();
    }
);
}