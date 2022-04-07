import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BasketServiceService} from '../basket-service.service';

interface Number {
  value: number;
  viewValue: string;
}

interface BasketItem {
  name: string,
  price: number,
  nb: number,
  id: number,
};

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  constructor(private basketService: BasketServiceService) { }
  
  ngOnInit(): void {}

  @Input() item: BasketItem = { name: '', nb: 0, price: 0, id: 0 }; 

  public onDelete(): void {
    this.basketService.deleteItem(this.item);
  }
}
