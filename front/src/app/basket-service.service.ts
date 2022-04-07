import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface BasketItem {
  name: string,
  price: number,
  nb: number,
  id: number,
};

@Injectable({
  providedIn: 'root'
})
export class BasketServiceService {

  constructor() { }

  public list: BehaviorSubject<BasketItem[]> = new BehaviorSubject<BasketItem[]>([] as BasketItem[]);

  public addItem(item: BasketItem): void {
    const currentList = this.list.getValue();
    const selectItem = currentList.find(x => x.name === item.name);
    if (selectItem) {
      selectItem.nb += 1;
      this.list.next(currentList);
    } else {
      this.list.next([...currentList, item]);
    }
  }

  public updateNbItem(item: BasketItem, nbTimes: number): void {
    const currentList = this.list.getValue();
    const selectItem = currentList.find(x => x.name === item.name);
    if (selectItem) {
      selectItem.nb = nbTimes;
      this.list.next(currentList);
    }
  }

  public deleteItem(item: BasketItem): void {
    const currentList = this.list.getValue();
    this.list.next(currentList.filter(x => x !== item));
  }

  public deleteAll(): void {
    this.list.next([]); 
  }
}
