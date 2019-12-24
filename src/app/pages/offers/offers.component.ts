import { Component, OnInit, OnDestroy } from '@angular/core';
import {OfferService} from '../../offer.service';
import {Offer, ObjectOffer} from '../../Offer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit, OnDestroy {
  

  constructor(private offerService: OfferService) { }

  offersList:  ObjectOffer[] ;
  subscription: Subscription;
 
  ngOnInit() {

    this.subscription = this.offerService.getOffers().subscribe(data => {
      this.offersList = [...data.offers];
    })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

    }

  
  
  }
