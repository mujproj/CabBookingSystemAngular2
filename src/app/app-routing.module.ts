import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"customerRegister", component:CustomerRegistrationComponent},
  {path:"getAllCustomers", component:SearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
