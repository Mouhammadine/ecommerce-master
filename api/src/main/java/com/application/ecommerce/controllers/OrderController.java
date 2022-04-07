package com.application.ecommerce.controllers;

import com.application.ecommerce.models.Order;
import com.application.ecommerce.models.Product;
import com.application.ecommerce.models.User;
import com.application.ecommerce.repositories.OrderRepository;
import com.application.ecommerce.repositories.ProductRepository;
import com.application.ecommerce.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/orders")
    private ResponseEntity<List<Map<String, Object>>> getAllOrdersByUserId(@RequestParam String userId) {

        List<Map<String, Object>> orders = orderRepository
                .findByUser_Id(Long.valueOf(userId))
                .stream()
                .map(order -> {
                    Map<String, Object> res = new HashMap<>();
                    res.put("date", order.getDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")));
                    res.put("products", order.getProducts().stream().map(product -> new HashMap<String, Object>() {{
                        put("name", product.getName());
                        put("price", product.getPrice());
                    }}).collect(Collectors.toList()));
                    res.put("total", order.getTotal());
                    return res;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(orders);
    }

    @PostMapping("/orders/create")
    private ResponseEntity<Map<String, String>> createOrder(@RequestBody Map<String, Object> body) {
        User user = userRepository.findById(Long.valueOf((String) body.get("userId"))).get();
        List<Product> products = ((List<String>) body.get("productIds")).stream()
                .map(productId -> productRepository.findById(Long.valueOf(productId)).get())
                .collect(Collectors.toList());
        Order order = orderRepository.save(new Order(user, products));

        Map<String, String> res = new HashMap<>();
        res.put("id", order.getId().toString());
        res.put("userId", order.getUser().getId().toString());
        res.put("productCount", String.valueOf(order.getProducts().size()));
        return ResponseEntity.ok(res);
    }
}
