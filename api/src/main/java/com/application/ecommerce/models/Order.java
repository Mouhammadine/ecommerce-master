package com.application.ecommerce.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "datetime", nullable = false)
    private LocalDateTime date;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "orders_products",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "products_id"))
    private List<Product> products = new ArrayList<>();

    @Column(name = "total", nullable = false)
    private Long total;

    public Order(User user, List<Product> products) {
        this.date = LocalDateTime.now();
        this.user = user;
        this.products = products;
        this.total = products.stream().mapToLong(Product::getPrice).sum();
    }

}
