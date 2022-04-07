import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from 'src/utils/type';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

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
      this.router.navigate(['/']);
    }
  }

}
