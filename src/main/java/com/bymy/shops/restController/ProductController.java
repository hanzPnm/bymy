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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
    public @ResponseBody Product addProduct(
            @RequestParam(defaultValue = "defaultValue") String title,
            @RequestParam(defaultValue = "defaultValue") String description,
            @RequestParam(defaultValue = "100") Long price,
            @RequestParam(value = "files", required=false) List<MultipartFile> files ) {
        return productService.insertOrUpdate(0L, title, description, price, files);
    }

    @PutMapping(value = "/", produces = "application/json")
    public @ResponseBody Product updateProduct(@RequestParam Long id,
            @RequestParam(defaultValue = "defaul title") String title ,
            @RequestParam(defaultValue = "defaul description") String description,
            @RequestParam(defaultValue = "100") Long price,
            @RequestParam(value = "files", required=false) List<MultipartFile> files) {
                return productService.insertOrUpdate(id, title, description, price, files);
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
