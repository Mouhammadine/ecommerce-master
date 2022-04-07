package com.application.ecommerce.controllers;

import com.application.ecommerce.exceptions.ResourceNotFoundException;
import com.application.ecommerce.models.Product;
import com.application.ecommerce.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productRepository.findByIsArchivedIsFalse());
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id: " + id));
        return ResponseEntity.ok(product);
    }

    @PostMapping("/products/create")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productRepository.save(product));
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetail) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id: " + id));

        product.setName(productDetail.getName());
        product.setDescription(productDetail.getDescription());
        product.setPrice(productDetail.getPrice());
        product.setImageUri(product.getImageUri());

        return ResponseEntity.ok(productRepository.save(product));
    }

    @PostMapping("/products/delete")
    public Map<String, String> deleteProduct(@RequestBody Map<String, String> body) {
        Product product = productRepository.getById(Long.valueOf(body.get("id")));
        product.setIsArchived(true);
        productRepository.save(product);

        Map<String, String> res = new HashMap<>();
        res.put("key", "ok");
        return res;
    }

}
