import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthenticationService {

constructor(private http:HttpClient) { }


saveCustomer(customer:Object): Observable<Object>
  {
  return this.http.post(`http://localhost:9095/FinCorps-rest/api/registerCustomer`, customer);
  }

  login(customer:any):Observable<any>
    {
    return this.http.post(`http://localhost:9095/FinCorps-rest/api/loginCustomer`, customer);
    }
    }
