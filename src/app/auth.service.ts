import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = "https://route-ecommerce.onrender.com/";
  constructor(private _HttpClient:HttpClient) { }

  register(data: any): Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}api/v1/auth/signup`, data);
    
  }

  login(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}api/v1/auth/signin`, data);
    
  }

}
