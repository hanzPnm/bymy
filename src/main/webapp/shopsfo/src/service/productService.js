import axios from 'axios';

class ProductService{

    fetchProducts() {
        return axios.get(`/api/product/products`);        
    }
   
    fetchProduct(id) {
        return axios.get(`/api/product/${id}`);        
    }
    
    createProduct(product) {
        return axios.post("/api/product/", product, {});        
    }
}
export default new ProductService();