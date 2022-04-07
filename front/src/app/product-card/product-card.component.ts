import { Component, OnInit, Input } from '@angular/core';
import { BasketServiceService } from '../basket-service.service';
 
interface Product {
  name: string,
  price: number,
  imgUrl: string,
  description: string,
  id: number,
};

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private basketService: BasketServiceService) { }

  ngOnInit(): void {

  }

  @Input() item: Product = { name: '', price: 0, imgUrl: '', id: 0, description: ''};

  public addItem() : void {
    this.basketService.addItem({
      name: this.item.name,
      price: this.item.price,
      nb: 1,
      id: this.item.id,
    });
  }
}
