import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeresultServiceService {

  constructor(private http:HttpClient) { }

  getResultsfromServer(){
    return this.http.get("https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true")
  }

  getWorldResultfromServer(){
    return this.http.get('https://corona.lmao.ninja/v3/covid-19/all');
  }
}
