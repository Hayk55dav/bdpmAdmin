import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import { PartnersComponent} from './partners/partners.component';


const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full'},
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: '', redirectTo: 'partners', pathMatch: 'full' },
            { path: 'partners', component:  PartnersComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
