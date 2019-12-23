import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from '../app/pages/offers/offers.component';
import {MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { OfferService } from './offer.service';


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
