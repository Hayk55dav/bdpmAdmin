import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared/services/auth.guard';

const appRoutes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', loadChildren: 'app/pages/admin/admin.module#AdminModule', canActivate: [AuthGuard] },
    {path: 'auth', loadChildren: 'app/pages/auth/auth.module#AuthModule'},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
