import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {DataService} from '../data.service';
import { Constants } from '../../../shared/constants';


import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PartnersComponent} from '../partners/partners.component';

@Component({
    selector: 'app-edit-partner',
    templateUrl: './edit-partner.component.html',
    styleUrls: ['./edit-partner.component.css']
})
export class EditPartnerComponent implements OnInit {
    partner: any;
    emailFormControl;
    matcher;
    active;
    errorMessage: string;
    userNameFormControl;
    phoneFormControl;
    companyNameFormControl;
    stateFormControl;
    cityFormControl;
    addressFormControl;
    zipCodeFormControl;
    faxFormControl;
    incomePercentFormControl;
    debitFormControl;
    constructor(private errorStateMatcher: ErrorStateMatcher, private  dataService: DataService, public dialogRef: MatDialogRef<PartnersComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {
        this.partner = this.data;
        console.log(this.partner);
        if(this.partner.isActive === 0){
            this.active = false;
        }else{
            this.active = true;
        }
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/)
        ]);
        this.userNameFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
        ]);
        this.phoneFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)
        ]);
        this.companyNameFormControl = new FormControl('', [
            Validators.required,
            ]);
        this.stateFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]*$/),
        ]);
        this.cityFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]*$/),
        ]);
        this.addressFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.zipCodeFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.faxFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.incomePercentFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.debitFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.matcher = this.errorStateMatcher;
        console.log(this.matcher);
    }

    saveEdit(){
        if(this.active){
            this.partner.isActive = 1;
        }else {
            this.partner.isActive = 0;
        }
        this.dataService.postEditPartner(Constants.partnersAdmin.postEditPartner, this.partner)
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
