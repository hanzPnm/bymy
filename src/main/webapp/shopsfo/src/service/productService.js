import axios from 'axios';

class ProductService{

    fetchProducts() {
        return axios.get(`/api/product/products`);        
    }
}
export default new ProductService();