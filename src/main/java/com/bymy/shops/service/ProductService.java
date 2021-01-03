package com.bymy.shops.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.bymy.shops.model.FileModel;
import com.bymy.shops.model.Product;
import com.bymy.shops.repository.ProductRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProductService {

    private static final Logger log = LoggerFactory.getLogger(ProductService.class);

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

    public Product insertOrUpdate(Long id, String title, String description, Long price,
            List<MultipartFile> fileModelList) {
        Product product = findProduct(id).orElse(new Product());
        product.setTitle(title);
        product.setDescription(description);
        product.setPrice(price);
        List<FileModel> listPics = fileModelList.stream()
        .filter(ele -> !ele.getOriginalFilename().isEmpty())
        .map(ele -> {
            FileModel f = new FileModel();
            f.setName(ele.getOriginalFilename());
            f.setType(ele.getContentType());
            try {
                f.setPic(ele.getBytes());
            } catch (IOException e) {
                log.error(e.getMessage());
            }
            f.setProduct(product);
            return f;
        })
        .collect(Collectors.toList());
       if(!listPics.isEmpty()){
           if(product.getPics()!= null){
               product.getPics().clear();
               product.getPics().addAll(listPics);
            }
            else{
                product.setPics(listPics);
            }
        }
        return productRepository.save(product);

    }

}

