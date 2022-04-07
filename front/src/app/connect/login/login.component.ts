import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { url } from 'src/utils/type';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService : UserService) { }

  public email: string = '';
  public password: string = '';

  public ngOnInit(): void {
  }

  public onLogIn(): void {
    if (this.email.length && this.password.length) {
      this.http.post(url + ':8080/users/authenticate', {
        email: this.email,
        password: this.password,
      }).subscribe((response: any) => {
        if (response && response.key !== 'ko') {
          localStorage.setItem('user', JSON.stringify({ userId: response.key, name: response.name }));
          this.router.navigate(['/home']);
        } else {
          this.email = '';
          this.password = '';
        }
      }, (error) => {
        this.email = '';
        this.password = '';
      });
    }
  }

}
