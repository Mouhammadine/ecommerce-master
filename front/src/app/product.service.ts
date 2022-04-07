import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductResponse } from '../utils/type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public list: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([] as Product[]);

  public addProduct(response: ProductResponse[]): void {
    const newList: Product[] = response.map(x => ({ name: x.name, imgUrl: x.imageUri, price: x.price, id: x.id, description: x.description}));
    this.list.next(newList);
  }
}
