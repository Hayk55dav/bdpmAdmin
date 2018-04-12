import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material';

import {DataService} from '../data.service';
import {EditPartnerComponent} from '../edit-partner/edit-partner.component';
import {AddPartnerComponent} from '../add-partner/add-partner.component';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
    displayedColumns: any[] = ['mail', 'userName', 'phone', 'companyName', 'countryId', 'state', 'city', 'address', 'zipCode', 'fax', 'isActive', 'incomePercent', 'debit', 'id'];
    dataSource: any;

    constructor(private dataService: DataService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.getAllPartners();
    }

    getAllPartners() {
        this.dataService.getAllPartners()
            .subscribe(res => {
                this.dataSource = res;
            });
    }

    edit(elem): void {
        let dialogRef = this.dialog.open(EditPartnerComponent, {
            width: '595px',
            data: elem,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getAllPartners();
        });
    }

    addPartner(): void {
        let dialogRef = this.dialog.open(AddPartnerComponent, {
            width: '595px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getAllPartners();
        });
    }
}
