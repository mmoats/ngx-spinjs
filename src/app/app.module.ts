import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgxSpinjsModule} from './ngx-spinjs/ngx-spinjs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
