import { Component, OnInit } from '@angular/core';

import { Signup } from '../helper/interface/signup.interface';
import { SignupService } from '../helper/services/signup.service';

@Component({
  moduleId: module.id,
  templateUrl: '../../html/homepage.component.html',
  styleUrls: ['../../stylesheets/signup.component.css']
})

export class HomePageComponent {
  currentUser: Signup;

  users: Signup[] = [];

  constructor(private signupService: SignupService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }


}