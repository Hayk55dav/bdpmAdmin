import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import {PartnersComponent} from './partners/partners.component';
import {AddPartnerComponent} from './add-partner/add-partner.component';
import {EditPartnerComponent} from './edit-partner/edit-partner.component';
import {HeaderComponent} from '../../shared/components/header/header.component';

import {DataService} from './data.service';

import {AdminRoutingModule} from './admin.routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatNativeDateModule,
        MatTableModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatToolbarModule
    ],
    declarations: [
        AdminComponent,
        PartnersComponent,
        AddPartnerComponent,
        EditPartnerComponent,
        HeaderComponent
    ],
    providers: [DataService],
    entryComponents: [EditPartnerComponent, AddPartnerComponent]
})
export class AdminModule {
}
