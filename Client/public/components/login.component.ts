import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

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
export class LoginComponent implements OnInit {

  login: Login;
     users: Login[] = [];
  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit() {
   this.login = {
            familyName: '',
            email: '',
            password: '',
        }
  }

  private loadAllUsers() {
    console.log("first")
    
    this.signupService.getAll(this.login.familyName,this.login.email, this.login.password).subscribe(
      users => {
      //  this.users=users;
        this.router.navigate(['/homepage']);
      });
  }

  /*  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
      console.log(value, valid);
    }*/
}