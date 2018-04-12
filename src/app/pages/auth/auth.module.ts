import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthRoutingModule} from "./auth.routing.module";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";


import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        MatFormFieldModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule,
    ],
    declarations: [
        AuthComponent,
        LoginComponent
    ]
})
export class AuthModule {
}
