import { Component, OnInit } from '@angular/core';
import { User } from 'src/utils/type';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

    if (!this.user || this.user.name !== 'admin') {
      this.router.navigate(['/']);
    }
  }

}
