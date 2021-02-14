import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const token = localStorage.getItem('token')

        if (! token) {
            this.router.navigateByUrl('/auth/login')
            return false;
        }

        return new Observable(observer => {
            this.authService.verifyToken(token)
                .subscribe(response => {
                    observer.next(true)
                }, error => {
                    this.router.navigateByUrl('/auth/login')
                    observer.next(false)
                })
        })
    }
}
