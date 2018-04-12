import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Constants} from '../../../shared/constants';
import {DataService} from '../data.service';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PartnersComponent} from '../partners/partners.component';


@Component({
    selector: 'app-add-partner',
    templateUrl: './add-partner.component.html',
    styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit {
    partner: any = {
        mail: '',
        userName: '',
        phone: '',
        companyName: '',
        state: '',
        city: '',
        address: '',
        zipCode: '',
        fax: '',
        incomePercent: '',
        debit: '',
        VAT: 'EE123456789',
        isActive: true,
    };
    emailFormControl;
    matcher;
    errorMessage: string;
    constructor(private errorStateMatcher: ErrorStateMatcher, private dataService: DataService, public dialogRef: MatDialogRef<PartnersComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);

        this.matcher = this.errorStateMatcher;
    }

    addPartner() {
        if (this.partner.isActive) {
            this.partner.isActive = 1;
        } else {
            this.partner.isActive = 0;
        }
        this.dataService.putAddPartner(Constants.partnersAdmin.putAddPartner, this.partner)
            .subscribe(data => {
                if(data.error){
                    this.errorMessage = data.error.localizedMessage;
                }else{
                    this.dialogRef.close();
                }
            });
    }


    onNoClick(): void {
        this.dialogRef.close();
    }
}
