import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from '../app/pages/offers/offers.component';
import {MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { OfferSubscriptionService } from './offerSubscription.service';
import { HeaderComponent } from './layouts/header/header.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HeaderComponent,
    SubscriptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [OfferSubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
