import axios from 'axios';

class ProductService{

    fetchProducts() {
        return axios.get(`/api/product/products`);        
    }
   
    fetchProduct(id) {
        return axios.get(`/api/product/${id}`);        
    }
}
export default new ProductService();