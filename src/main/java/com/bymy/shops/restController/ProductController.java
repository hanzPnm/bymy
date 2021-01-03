package com.bymy.shops.restController;

import java.util.List;

import com.bymy.shops.model.Product;
import com.bymy.shops.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @GetMapping(value = "/products", produces = "application/json")
    public @ResponseBody List<Product> getAllProductq() {
        return productService.findAll();
    }
    @GetMapping(value = "/{id}", produces = "application/json")
    public @ResponseBody Product getProduct(@PathVariable Long id) {
        return productService.findProduct(id).orElseThrow();
    }
    
    @PostMapping(value = "/", produces = "application/json")
    public @ResponseBody Product addProduct(@RequestBody Product p) {
        return productService.insertOrUpdate(0L, p.getTitle(), p.getDescription(), p.getPrice());
    }

    @PutMapping(value = "/", produces = "application/json")
    public @ResponseBody Product updateProduct(@RequestBody Product p) {
        return productService.insertOrUpdate(p.getId(), p.getTitle(), p.getDescription(), p.getPrice());
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        try{
            productService.deleteProduct(id);
            return ResponseEntity.ok().build();
        }
        catch(Exception e){
            return ResponseEntity.notFound().build();
        }
    }

}
