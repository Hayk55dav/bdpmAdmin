import {Injectable} from '@angular/core';
import {Constants} from '../../shared/constants';

import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../shared/services/api.service';

@Injectable()
export class DataService {

    constructor(private apiService: ApiService) {
    }
    getAllPartners(): Observable<any> {
        return this.apiService.get(Constants.partnersAdmin.getPartners)
            .map(response => {
                return response.result.data;
            })
            .catch(error => {
                throw error.error;
            });
    }

    postEditPartner(url,data){
        return this.apiService.post(url, data)
            .map(res => {
                return res;
            })
            .catch(err => {
                throw err;
            });
    }

    putAddPartner(url, data){
        return this.apiService.put(url,data)
            .map(res => {
                return res;
            })
            .catch(err => {throw err});
    }
}

