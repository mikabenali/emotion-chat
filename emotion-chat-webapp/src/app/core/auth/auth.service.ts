import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host = 'http://localhost:3000'

  constructor(
      private http: HttpClient
  ) { }

  login(user: UserModel): Observable<boolean> {
    const endpoint = '/users/login'
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
      })
    }

    return new Observable(observer => {
      this.http.post(this.host + endpoint, user, httpOptions)
          .subscribe(response => {
            localStorage.setItem('token', response.toString())
            observer.next(true)
          }, error => {
           observer.error(error)
      })
    })
  }

  register(user: UserModel) {

  }
}
