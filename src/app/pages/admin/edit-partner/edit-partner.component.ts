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
            Validators.email,
        ]);

        this.matcher = this.errorStateMatcher;
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
