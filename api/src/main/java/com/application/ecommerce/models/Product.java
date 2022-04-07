package com.application.ecommerce.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private Long price;

    @Column(name = "image_uri", nullable = false)
    private String imageUri;

    @JsonIgnore
    @ManyToMany(mappedBy = "products", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

    @JsonIgnore
    @Column(name = "is_archived")
    private Boolean isArchived = false;

}
