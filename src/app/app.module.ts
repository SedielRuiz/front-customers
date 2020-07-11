import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';

const routes: Routes = [
	{ path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
	{ path: 'create-customer', component: CreateCustomerComponent },
	{ path: 'list-customer', component: ListCustomersComponent },
	{ path: 'edit-customer', component: EditCustomersComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		CreateCustomerComponent,
		ListCustomersComponent,
		EditCustomersComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		HttpClientModule
	],
	exports: [ RouterModule ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
