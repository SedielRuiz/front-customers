import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CustomerService }  from '../customer-service.service';

@Component({
	selector: 'app-list-customers',
	templateUrl: './list-customers.component.html',
	styles: []
})
export class ListCustomersComponent implements OnInit {

	constructor(
		private router: Router,
		public http: HttpClient,
		public service: CustomerService
	){}

	customers:any = null;

	ngOnInit(): void {
		this.getCustomers();
	}

	getCustomers(){
		this.service.getCustomer().subscribe(data => {
			this.customers = data;
		});
	}

	editCustomer(){
		this.router.navigate(["/edit-customer"])
	}

}
