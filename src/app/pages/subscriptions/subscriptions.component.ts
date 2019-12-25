import { Component, OnInit } from '@angular/core';
import { OfferSubscriptionService } from 'src/app/offerSubscription.service';
import {ObjectSubscription} from '../../Subscription';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['../offers/offers.component.css'],
})
export class SubscriptionsComponent implements OnInit {

  subscriptionList: ObjectSubscription[];
  subscription: Subscription;

  constructor(private offerSubscriptionService: OfferSubscriptionService) { }

  ngOnInit() {
    this.subscription = this.offerSubscriptionService.getSubscriptions().subscribe(data =>{
      this.subscriptionList = [...data.subscriptions];
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
