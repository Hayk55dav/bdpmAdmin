import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(protected router: Router, private authService: AuthService) {
    }

    canActivate() {
        if (this.authService.token) {
            console.log(true);
            return true;
        }
        else {
            console.log(false);
            this.router.navigate(["auth/login"]);
            return false;
        }
    }
}