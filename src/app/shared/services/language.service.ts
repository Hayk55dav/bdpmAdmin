import { Injectable } from '@angular/core';

@Injectable()

export class LanguageService {

    getCurrentLanguage(lang: any) {
        switch (lang) {
            case 'en':
                return { key: 'en', value: 'EN', flag: 'flag-us' };
            case 'am':
                return { key: 'am', value: 'HY', flag: 'flag-am' };
            case 'es':
                return { key: 'es', value: 'ES', flag: 'flag-es' };
            default:
                throw 'Unsupported Language';
        }
    }

}