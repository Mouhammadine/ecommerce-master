import { Component, OnInit } from '@angular/core';
import { BasketServiceService } from '../basket-service.service'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User, url} from '../../utils/type';
import { HttpClient } from '@angular/common/http';

interface BasketItem {
  name: string,
  price: number,
  nb: number,
  id: number,
};

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private http: HttpClient, private basketService: BasketServiceService, private userService : UserService) { }

  public list: BasketItem[] = [];
  public totalAmount: number = 0;
  public user: User | null = null;
  public message: string | null = null;

  ngOnInit(): void {
    this.basketService.list.subscribe(x => {
      this.list = x;
      this.totalAmount = x.reduce((previous, current) => {
        return current.price * current.nb + previous;
      }, 0);
    });

    this.userService.user.subscribe(x => this.user = x);
  }

  public checkout(): void {
    if (this.user && this.list.length) {
      this.http.post(url + ':8080/orders/create', {
        userId: this.user?.userId,
        productIds: this.list.reduce<string[]>((previous, current) => {
          const ids = [];
          for (let i = 0; i < current.nb; i++) {
            ids.push(current.id.toString());
          }
          return [...ids, ...previous];
        }, []),
      }).subscribe((response: any) => {
        this.basketService.deleteAll();
        this.message = 'Votre commande a bien été effectué.';
      }, (error) => {
        console.log(' error error');
        this.message = 'Une erreur est survenu lors de votre commande.';
      });
    } else if (!this.list.length) {
      this.message = 'Veuillez ajouter des produits dans le panier.';
    } else if(!this.user) {
    this.message = 'Veuillez vous connecter pour commander.';
    }
  }
}
