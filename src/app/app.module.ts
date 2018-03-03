import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';
import { AppComponent } from './app.component';
import { MyRulesDirective } from './my-rules.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyRulesDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
