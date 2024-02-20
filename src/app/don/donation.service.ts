import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  makeDonation(amount: number, donationName: string): Observable<any> {
    // Remplacez 'YOUR_BACKEND_URL' par l'URL de votre backend où vous voulez envoyer les données de don.
    const url = 'YOUR_BACKEND_URL/donate';
    const data = {
      amount: amount,
      donationName: donationName
    };
    return this.http.post<any>(url, data);
  }
}
