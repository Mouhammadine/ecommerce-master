package com.application.ecommerce.controllers;

import com.application.ecommerce.exceptions.ResourceNotFoundException;
import com.application.ecommerce.models.User;
import com.application.ecommerce.repositories.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id: " + id));
        return ResponseEntity.ok(user);
    }

    @PostMapping("users/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestBody Map<String, String> body) {
        String email = body.getOrDefault("email", null);
        String password = DigestUtils.sha256Hex(body.getOrDefault("password", null));

        User user = userRepository.findByEmailAndPassword(email, password).orElse(null);

        Map<String, String> res = new HashMap<>();

        if (user != null) {
            res.put("key", user.getId().toString());
            res.put("name", user.getName());
        } else
            res.put("key", "ko");

        return ResponseEntity.ok(res);
    }

    @PostMapping("/users/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        if (userRepository.existsByEmail(user.getEmail()))
            return ResponseEntity.ok(null);

        user.setPassword(DigestUtils.sha256Hex(user.getPassword()));
        user.setRole("muggle");
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id: " + id));

        user.setEmail(userDetails.getEmail());
        user.setName(userDetails.getName());
        user.setPassword(DigestUtils.sha256Hex(user.getPassword()));

        return ResponseEntity.ok(userRepository.save(user));
    }

}
