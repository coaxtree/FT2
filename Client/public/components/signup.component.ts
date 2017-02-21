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
export class SignupComponent implements OnInit {

    public signup: Signup;
    errMsg='Email id is already registered..!';
    public errorMsg:string;
    
    ngOnInit() {
        this.signup = {
            yourName: '',
            familyName: '',
            email: '',
            password: '',
        }
    }

    constructor(
        private signupService: SignupService,
        private router: Router
    ) { }

    registerUser() {
        // Variable to hold a reference of addUser
        let signupOperation: Observable<Signup[]>;
        signupOperation = this.signupService.addUser(this.signup)
        signupOperation.subscribe(
            signup => {
                this.router.navigate(['/login']);
            },
            err => {
                // Log errors if any
                this.errorMsg=err;
                console.log(err);
            });
    }

}