import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';

import { LanguageService } from './shared/services/language.service';
import { AuthGuard } from './shared/services/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { ApiService } from './shared/services/api.service';

import {AppRoutingModule} from './app.routing.module';
import {HttpModule} from "@angular/http";
import {HttpClientModule, HttpClient} from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [AuthGuard, AuthService, ApiService, LanguageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
