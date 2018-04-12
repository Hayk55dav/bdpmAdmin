import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Constants, /*ConstantsFake*/ } from '../constants';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { HttpParams } from '@angular/common/http';

@Injectable()

export class ApiService {

    currentLang: any = {
        value: "HY"
    };

    constructor(public http: Http, protected router: Router, translate: TranslateService, private languageService: LanguageService) {
        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLang = this.languageService.getCurrentLanguage(event.lang);
        });
    }
    

    private prepareOptions(options) {
        let token = localStorage.getItem('AUTH_TOKEN');
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();
        // options.params = options.params || new HttpParams();
        if (!options.headers.has('Authorization'))
            options.headers.append('Authorization', token);
        if(!options.headers.has('language')) {
            options.headers.append('language', 'HY');
        }
    }

    get(url: string, options: RequestOptions = new RequestOptions(), isLocal: Boolean = false) {
        this.prepareOptions(options);
        let base = isLocal ? Constants.apiBaseLocal : Constants.apiBase;
        return this.http.get(base + url, options)
            .map(result => {
                let data = result.json();
                if(data.error && data.error.messageKey.indexOf('Authorization') !== -1) {
                    this.router.navigate(["/auth/login"]);
                    localStorage.clear();
                    throw data;
                }
                else return data;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }

    post(url: string, body: any, options: RequestOptions = new RequestOptions()) {
        this.prepareOptions(options);
        return this.http.post(Constants.apiBase + url, body, options)
            .map(res => {
                return res.json();
            })
            .catch((err: any) => {
                throw err;
            });
    }

    put(url: string, body: any, options: RequestOptions = new RequestOptions()) {
        this.prepareOptions(options);
        return this.http.put(Constants.apiBase + url, body, options)
            .map(res => {
                return res.json();
            })
            .catch((err: any) => {
                throw err;
            });
    }
}