import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeresultServiceService } from './homeresult-service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { CurrentissueComponent } from './currentissue/currentissue.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    AboutComponent,
    CurrentissueComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeresultServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
