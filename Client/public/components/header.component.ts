import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header-app',
  template: `
  <script>
    $.material.input();
</script>
<div class="navbar navbar-default">
  <div class="container-fluid">
  <div class="col-md-11">
    <div class="navbar-header">
      <span class="navbar-brand firststyle">{{pageTitle}}</span>
      </div>
    </div>
     <div class="col-md-1 logout" *ngIf="router.url === '/homepage'">
<button class="btn btn-success" (click)="logout()" [routerLink]="['/login']">Logout</button>
    </div>
  </div>
</div>

  `,
  styleUrls: ['../../stylesheets/header.component.css']
})
export class HeaderComponent {
  pageTitle: string = "My Family Tree"

  constructor(private router: Router) {

  }
     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}