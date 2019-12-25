import { Component, OnInit, OnDestroy } from '@angular/core';
import {OfferSubscriptionService} from '../../offerSubscription.service';
import { ObjectOffer} from '../../Offer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit, OnDestroy {
  

  constructor(private offerSubscriptionService: OfferSubscriptionService) { }

  offersList:  ObjectOffer[] ;
  subscription: Subscription;
 
  ngOnInit() {

    this.subscription = this.offerSubscriptionService.getOffers().subscribe(data => {
      this.offersList = [...data.offers];
    })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

    }

  
  
  }
