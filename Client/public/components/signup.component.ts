import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Signup } from '../helper/interface/signup.interface';
import { SignupService } from '../helper/services/signup.service';

@Component({
    moduleId: module.id,
    templateUrl: '../../html/signup.component.html',
    styleUrls: ['../../stylesheets/signup.component.css']
})
export class SignupComponent implements OnInit{

    public signup: Signup;

    ngOnInit() {
        this.signup = {
            yourName: '',
            familyName: '',
            email: '',
            password: ''
        }
    }

        constructor(
        private signupService: SignupService,
        private router: Router
    ) { }

    submitUser() {
        // Variable to hold a reference of addUser
        console.log("first1")
        let signupOperation: Observable<Signup[]>;
            console.log("entered")
            signupOperation = this.signupService.addUser(this.signup)
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

}