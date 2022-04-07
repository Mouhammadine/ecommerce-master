import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Product, User } from 'src/utils/type';
import { UserService } from '../user.service';
import { url } from 'src/utils/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private productService: ProductService, private userService : UserService) { }

  list: Product[] = [];

  user: User | null = null;

  ngOnInit(): void {
    this.http.get(url + ':8080/products')
    .subscribe((response) => {
      this.productService.addProduct(response as any);
    });
    this.productService.list.subscribe(x => this.list = x);
  
    const newUser = localStorage.getItem('user');
    if (newUser) {
      this.userService.addUser(JSON.parse(newUser));
    } else {
      this.userService.removeUser();
    }
  }

}
