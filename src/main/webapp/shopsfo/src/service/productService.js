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
    
    updateProduct(product) {
        return axios.put("/api/product/", product, {});        
    }

    removeProduct(id) {
        return axios.delete(`/api/product/${id}`);        
    }
}
export default new ProductService();