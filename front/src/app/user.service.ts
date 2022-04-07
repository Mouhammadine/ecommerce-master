import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../utils/type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  public addUser(newUser: User | null): void {
    this.user.next(newUser);
  }

  public removeUser(): void {
    this.user.next(null);
  }
}
