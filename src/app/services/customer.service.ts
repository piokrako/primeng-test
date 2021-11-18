import { Customer } from "./../models/customer";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getCustomersMedium() {
      return this.http.get<any>('assets/customers-medium.json')
          .toPromise()
          .then(res => <Customer[]>res.data)
          .then(data => { return data; });
  }
}
