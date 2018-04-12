import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../../shared/constants';

import {AuthService} from '../../../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    user: any = {};
    errorMessage: any;
    loading: boolean = false;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
    }

    logIn() {
        if (this.user && this.user.userName.length > 0 && this.user.password.length > 0) {
            this.loading = true;
            console.log(this.user);
            this.authService.logIn(Constants.admin.adminLogin, this.user)
                .subscribe(
                    data => {
                        console.log(data);
                        this.loading = false;
                        if (data.error) {
                            this.errorMessage = data.error.localizedMessage;
                        }else{
                            this.router.navigate(['/admin']);
                        }
                    },
                    error => {
                        this.loading = false;
                    }
                );
        }
    }

    reset() {
        this.loading = false;
        this.user = {
            userName: '',
            password: ''
        };
    }
}
