import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    get token() {
        return localStorage.getItem('AUTH_TOKEN');
    }

    constructor(protected router: Router, private apiService: ApiService) {
        if (!this.token && !router.url.startsWith('/auth')) {
            localStorage.clear();
            router.navigate(["auth/login"]);
            console.log(this.token);
        }
    }

    logIn(url, credentials) {
        return this.apiService.post(url, credentials)
            .map(response => {
                if (response.error) {
                    console.log(response.error);
                }
                else {
                    localStorage.setItem('AUTH_TOKEN', response.result.data.authorization);
                    localStorage.setItem('USER', JSON.stringify(credentials.userName));
                }
                return response;
            })
            .catch(error => {
                console.log(error);
                throw error;
            })
    }

    logOut() {        
        localStorage.clear();
        this.router.navigate(['auth/login']);
    }
}
