import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from 'src/utils/type';
@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public name: string = '';
  public price: number = 0;
  public imageUrl: string = '';
  public description: string = '';

  public addProduct(): void {
    if (this.name.length && this.price > 0 && this.imageUrl.length)
    this.http.post(url + ':8080/products/create', {
      name: this.name,
      description: this.description,
      price: this.price,
      imageUri: this.imageUrl,
    }).subscribe((response) => {
      this.router.navigate(['/']).then(() => this.router.navigate(['/admin']));
    }, (error) => {
      console.log({ error });
    })
  }
}
