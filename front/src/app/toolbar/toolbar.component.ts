import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserService } from '../user.service';
import { User} from '../../utils/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  user: User | null = null;

  ngOnInit(): void {
    this.userService.user.subscribe(x => this.user = x);
  }

  public onLogOut(): void {
    localStorage.removeItem('user');
    this.userService.removeUser();
    this.router.navigate(['/']);
  }

  public goToLogIn(): void {
    this.router.navigate(['/login']);
  }

  public goToHome(): void {
    this.router.navigate(['/home']);
  }

  public goToProfil(): void {
    this.router.navigate(['/profil']);
  }

}
