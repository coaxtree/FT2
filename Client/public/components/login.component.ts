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

  // users: Login[] = [];
  constructor(
    private route: ActivatedRoute,
    private signupService: SignupService,
    private router: Router
    
  ) { }

  public login: Login;
  public registerMsg:any;
  public errorLoginMsg:string;

  regMsg='Congrats! Registration Successful';
  errLoginMsg='Invalid user name or password';
  
  ngOnInit() {
  this.login = {
      email: '',
      password: '',
    }

  this.registerMsg=localStorage.getItem('registerMsg');

  }
 

  submitUser() {
    // Variable to hold a reference of addUser
    console.log("first1")
    let signupOperation: Observable<Login[]>;
    console.log("entered")
    signupOperation = this.signupService.getLogin(this.login)
    signupOperation.subscribe(
      login => {
        console.log("hello")
        this.router.navigate(['/homepage']);
        localStorage.removeItem('registerMsg');
      },
      err => {
        // Log errors if any
        console.log(err);
        this.errorLoginMsg=err;
      });

  }
 
 /*  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
     console.log(value, valid);
   }*/
}