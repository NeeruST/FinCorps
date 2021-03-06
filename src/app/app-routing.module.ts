import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},{ path:'home', component: HomeComponent},
  { path:'register', component: RegisterCustomerComponent},
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
