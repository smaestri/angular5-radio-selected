import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService } from './myservice.service'


import { AppComponent } from './app.component';
import { DocreateComponent } from './docreate/docreate.component';
import { CheckmailComponent } from './checkmail/checkmail.component';


@NgModule({
  declarations: [
    AppComponent,
    DocreateComponent,
    CheckmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
