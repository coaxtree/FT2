import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { Signup } from '../helper/interface/signup.interface';
import { SignupService } from '../helper/services/signup.service';

@Component({
  moduleId: module.id,
  selector: 'header-app',
  template: `
  <script>
    $.material.input();
</script>

  <div class="container-fluid">
  <div class="col-md-10">
    <div class="navbar-header">
      <span class="navbar-brand firststyle">{{pageTitle}}</span>
      </div>
    </div>
     <div class="col-md-2 logout" *ngIf="router.url === '/homepage'">
     <img class='img-responsive treeview' 
     src="public/images/treeview.png" 
     alt='Tree View Icon' 
     title="Tree View" 
     [routerLink]="['/login']">
      <ul class="nav navbar-nav navbar-right">
<li class="dropdown">
          <a href="" class="dropdown-toggle" data-toggle="dropdown">{{currentUser.name}}
            <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="javascript:void(0)">Profile</a></li>
            <li><a href="javascript:void(0)">Home page</a></li>
            <li><a href="javascript:void(0)">Privacy</a></li>
            <li class="divider"></li>
            <li><a href="" (click)="logout()">Logout</a></li>
          </ul>
        </li>
        </ul>
    </div>
  </div>

  `,
  styleUrls: ['../../stylesheets/header.component.css']
})
export class HeaderComponent {
  pageTitle: string = "My Family Tree"

  currentUser: String;

  constructor(private router: Router,private signupService: SignupService) {
 this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 console.log(this.currentUser);
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}