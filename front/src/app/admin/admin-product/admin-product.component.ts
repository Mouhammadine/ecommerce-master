import { Component, OnInit } from '@angular/core';
import { Product, url } from 'src/utils/type';
import { ProductService } from 'src/app/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(url + ':8080/products')
    .subscribe((response) => {
      this.productService.addProduct(response as any);
    });
    this.productService.list.subscribe(x => this.productList = x);
  }

  public productList: Product[] = [];

  public deleteItem(id: number): void {
    this.http.post(url + ':8080/products/delete', { id })
    .subscribe((response) => {
      this.router.navigate(['/']).then(() => this.router.navigate(['/admin']));
    }, (error) => {
      console.log({ error });
    });
  }

}
