import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../../../utils/type';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  public name: string = "";
  public password: string = "";
  public email: string = "";

  public onChangeName(name: string): void {
    this.name = name;
  }
  public onChangePassword(password: string): void {
    this.password = password;
  }
  public onChangeEmail(email: string): void {
    this.email = email;
  }

  ngOnInit(): void {
  }

  public onSignIn(): void {
    if (this.name.length && this.password.length && this.email.length) {
      this.http.post(url + ':8080/users/create', {
        name: this.name,
        email: this.email,
        password: this.password
      }).subscribe((response: any) => {
        if (response && response.key !== 'ko') {
          localStorage.setItem('user', JSON.stringify({ userId: response.id, name: response.name }));
          this.router.navigate(['/home']);
        }
      }, (error) => {
        console.log({ error });
      });
    }
  }

}
