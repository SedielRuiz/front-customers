import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class CustomerService {

  	constructor(
		public http: HttpClient
	) { }

	url = "http://localhost:3333/api/customers";

	getCustomer(){
		return this.http.get(this.url);
	}

	storeCustomer(data){
		return this.http.post(this.url+"/store", data);
	}

	updateCustomer(data){
		return this.http.put(this.url+"/update", data);
	}

	destroyCustomer(id){
		return this.http.put(this.url+"/destroy", id);
	}
}
