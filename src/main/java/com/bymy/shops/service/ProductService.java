package com.bymy.shops.service;

import java.util.List;
import java.util.Optional;

import com.bymy.shops.model.Product;
import com.bymy.shops.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findProduct(Long id) {
        return productRepository.findById(id);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Product insertOrUpdate(Long id, String title, String description, Long price){
        Product product = findProduct(id).orElse(new Product());
        product.setTitle(title);
        product.setDescription(description);
        product.setPrice(price);
        return productRepository.save(product);

    }

}

