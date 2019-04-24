import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxRadialModule} from '../../projects/ngx-radial/src/lib/ngx-radial.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRadialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
