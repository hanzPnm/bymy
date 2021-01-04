import axios from 'axios';

class ProductService{

    fetchProducts() {
        return axios.get(`https://jsonplaceholder.typicode.com/users`);        
    }
}
export default new ProductService();