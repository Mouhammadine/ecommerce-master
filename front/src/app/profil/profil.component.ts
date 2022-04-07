import { Component, OnInit } from '@angular/core';
import { ProductOrder, url, User } from 'src/utils/type';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  public orders: ProductOrder[] = [];
  public user: User | null = null;

  ngOnInit(): void {
    const newUser = localStorage.getItem('user');
    if (newUser) {
      this.userService.addUser(JSON.parse(newUser));
    } else {
      this.userService.removeUser();
    }
    this.userService.user.subscribe(x => this.user = x);

    if (this.user) {
      this.http.get(url + ':8080/orders?userId=' + this.user.userId)
      .subscribe(x => {
        if (x) {
          this.orders = x as ProductOrder[];
        }
      })
    } else {
      this.router.navigate(['/']);
    }
  }



}
