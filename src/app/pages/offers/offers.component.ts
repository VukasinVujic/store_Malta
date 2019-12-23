import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../offer.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {Offer, ObjectOffer} from '../../Offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  
  constructor(private offerService: OfferService) { }

  offersList: ObjectOffer[] ;

 
  ngOnInit() {

    this.offerService.getOffers( ).subscribe(data => {
      this.offersList = [...data.offers];
    })


  
  }
