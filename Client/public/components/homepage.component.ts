import { Component, OnInit } from '@angular/core';

import { SignupService } from '../helper/services/signup.service';

@Component({
  moduleId: module.id,
  templateUrl: '../../html/homepage.component.html',
  styleUrls: ['../../stylesheets/signup.component.css']
})

export class HomePageComponent {

  currentUser: String;

  constructor(private signupService: SignupService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}