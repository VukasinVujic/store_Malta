import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferSubscriptionService {
  public productUrl = './assets/offers.json';
  
    constructor(private http: HttpClient) {}
    
    getOffers(): Observable<any>{
      return this.http.get('../assets/offers.json');
    }

    getSubscriptions(): Observable<any>{
      return this.http.get('../assets/subscriptions.json');
    }
    
  }    
    

      

