import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header-app',
  template: `
  <script>
    $.material.input();
</script>
<div class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <span class="navbar-brand firststyle">{{pageTitle}}</span>
    </div>
  </div>
</div>

  `,
  styleUrls: ['../../stylesheets/header.component.css']
})
export class HeaderComponent { 
   pageTitle : string ="My Family Tree"
}