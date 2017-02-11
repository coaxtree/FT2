import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Login } from '../helper/interface/login.interface';
import { SignupService } from '../helper/services/signup.service';

@Component({
  moduleId: module.id,
  templateUrl: '../../html/login.component.html',
  styleUrls: ['../../stylesheets/login.component.css']
})
export class LoginComponent {

  returnUrl: string;
  // users: Login[] = [];
  constructor(
    private route: ActivatedRoute,
    private signupService: SignupService,
    private router: Router
    
  ) { }

  public login: Login;

  ngOnInit() {
  this.login = {
      familyName: '',
      email: '',
      password: '',
    }
  }

  submitUser() {
    // Variable to hold a reference of addUser
    console.log("first1")
    let signupOperation: Observable<Login[]>;
    console.log("entered")
    signupOperation = this.signupService.getLogin(this.login)
    signupOperation.subscribe(
      signup => {
        console.log("hello")
        this.router.navigate(['/homepage']);
      },
      err => {
        // Log errors if any
        console.log(err);
      });

  }
   private loadAllUsers() {
     console.log("first")
 
     this.signupService.getUser().subscribe(
       login => {
         //this.login=login;
         this.router.navigate(['/homepage']);
       });
   }
 
 /*  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
     console.log(value, valid);
   }*/
}