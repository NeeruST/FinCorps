import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

import { Customer } from '../customer';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  state: any = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']

  customer: Customer= new Customer();

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    phoneNo: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    dob: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    address: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pincode: ['', [Validators.required]],
    cardType: ['', [Validators.required]],
    bank: ['', [Validators.required]],
    accountNo: ['', [Validators.required]],
    ifscCode: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form builder

  get f() { return this.registerForm.controls; }

  changeState(e: string | any) {
    this.registerForm.get('state').setValue(e.target.value, { onlySelf: true
    })
  }


  Customer(): void{
    this.submitted = false;
    this.customer = new Customer();
  }

  onSubmit(){
    this.submitted = true;
    this.customer = this.registerForm.value;
    //stop the process here if form is invalid
    if (this.registerForm.invalid){
      return;
    }

    this.save();
  }

  save(){
    this.authenticationService.saveCustomer(this.customer)
    .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    //this.address = new Address();

    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/login']);
  }


}



