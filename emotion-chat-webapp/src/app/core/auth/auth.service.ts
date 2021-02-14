import { Injectable } from '@angular/core';
import {UserModel} from '../models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

interface LoginResponse {
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private host = 'http://localhost:3000';

    constructor(
        private http: HttpClient
    ) { }

    login(user: UserModel): Observable<boolean> {
        const endpoint = '/users/login';

        return new Observable(observer => {
            this.http.post(this.host + endpoint, user)
                .subscribe(response => {
                    // @ts-ignore
                    localStorage.setItem('token', response.token);
                    observer.next(true);
                }, error => {
                    observer.error(error);
                });
        });
    }

    register(user: UserModel): Observable<any> {
        const endpoint = '/users/register';
        return this.http.post(this.host + endpoint, user);
    }


    verifyToken(token: string): Observable<any> {
        const endpoint = '/users/verify_token';
        return this.http.post(this.host + endpoint, token);
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}
