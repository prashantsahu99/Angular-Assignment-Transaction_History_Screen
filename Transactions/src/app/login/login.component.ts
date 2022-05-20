import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild ('SignIn') SignIn!:NgForm
  Sign !:User

  show=false;
  display=false;

  userdetails:any={};

  constructor(private router:Router,private details:TransactionServiceService) {
    this.userdetails=this.details.getUserDetails();
   }

  ngOnInit(): void {
    this.Sign={username:'',password:''}
  }
  submitForm(){
    if(this.SignIn.valid){
      if(this.Sign.username===this.userdetails.username && this.Sign.password===this.userdetails.password){
      console.log(this.SignIn.value);
      this.display=false;
      this.show=true;
      this.router.navigate(['/Transaction_Screen'])
      this.SignIn.resetForm();
      }
      else{
        this.show=false;
        this.display=true;
      }
    }
  }

}
