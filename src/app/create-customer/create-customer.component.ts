import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService }  from '../customer-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styles: [
  ]
})
export class CreateCustomerComponent implements OnInit {

	constructor(
		private router: Router,
		public service: CustomerService
	) { }

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
	}

	saveCustomer(){
		this.service.storeCustomer(this.customer).subscribe(data => {
			console.log("guarde", data);
		});
		this.router.navigate(["/list-customer"]);
	}

}
