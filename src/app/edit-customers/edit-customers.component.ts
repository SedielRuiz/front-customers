import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-edit-customers',
	templateUrl: './edit-customers.component.html',
	styles: [
	]
})
export class EditCustomersComponent implements OnInit {

	constructor(private router: Router) { }

	customer = {
		"document":0,
		"firstName":"",
		"secondName":"",
		"firstLastName":"",
		"secondLastName":"",
		"email":"",
		"address":"",
	};

	ngOnInit(): void {
		this.customer.document = 0;
		this.customer.firstName = "";
		this.customer.secondName = "";
		this.customer.firstLastName = "";
		this.customer.secondLastName = "";
		this.customer.email = "";
		this.customer.address = "";
	}

	updateCustomer(){
		this.router.navigate(["/list-customer"]);
	}

}
