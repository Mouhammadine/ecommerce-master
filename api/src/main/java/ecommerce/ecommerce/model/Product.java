// package ecommerce.ecommerce.model;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.Table;

// @Entity
// @Table(name = "products")
// public class Product {
    
//     private long id;
//     private String name;
//     private String description;
//     private Long price;
//     private String imageUri;
    
//     public Product() {}

//     public Product(String name, String description, Long price, String imageUri) {
//         this.name = name;
//         this.description = description;
//         this.price = price;
//     }

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     public long getId() {
//         return id;
//     }
//     public void setId(long id) {
//         this.id = id;
//     }

//     @Column(name = "name", nullable = false)
//     public String getName() {
//         return name;
//     }
//     public void setName(String name) {
//         this.name = name;
//     }

//     @Column(name = "description", nullable = false)
//     public String getDescription() {
//         return description;
//     }
//     public void setDescription(String description) {
//         this.description = description;
//     }

//     @Column(name = "price", nullable = false)
//     public Long getPrice() {
//         return price;
//     }
//     public void setPrice(Long price) {
//         this.price = price;
//     }

//     @Column(name = "image_uri", nullable = false)
//     public String getImageUri() {
//         return imageUri;
//     }
//     public void setPassword(String imageUri) {
//         this.imageUri = imageUri;
//     }

//     @Override
//     public String toString() {
//         return "Product [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price + ", imageUri=" + imageUri + "]";
//     }
// }
