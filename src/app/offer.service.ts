import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Offer, ObjectOffer} from '../app/Offer'; 

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  public productUrl = './assets/offers.json';
  
    constructor(private http: HttpClient) {}
    
    getOffers(): Observable<any>{
      return this.http.get('../assets/offers.json');
    }
    
  }    
    

      

