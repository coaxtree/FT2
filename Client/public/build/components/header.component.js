"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { Signup } from '../helper/interface/signup.interface';
var signup_service_1 = require("../helper/services/signup.service");
var HeaderComponent = (function () {
    function HeaderComponent(router, signupService) {
        this.router = router;
        this.signupService = signupService;
        this.pageTitle = "My Family Tree";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }
    HeaderComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'header-app',
        template: "\n  <script>\n    $.material.input();\n</script>\n\n  <div class=\"container-fluid\">\n  <div class=\"col-md-10\">\n    <div class=\"navbar-header\">\n      <span class=\"navbar-brand firststyle\">{{pageTitle}}</span>\n      </div>\n    </div>\n     <div class=\"col-md-2 logout\" *ngIf=\"router.url === '/homepage'\">\n     <img class='img-responsive treeview' \n     src=\"public/images/treeview.png\" \n     alt='Tree View Icon' \n     title=\"Tree View\" \n     [routerLink]=\"['/login']\">\n      <ul class=\"nav navbar-nav navbar-right\">\n<li class=\"dropdown\">\n          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{currentUser.name}}\n            <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"javascript:void(0)\">Profile</a></li>\n            <li><a href=\"javascript:void(0)\">Home page</a></li>\n            <li><a href=\"javascript:void(0)\">Privacy</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"\" (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </li>\n        </ul>\n    </div>\n  </div>\n\n  ",
        styleUrls: ['../../stylesheets/header.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, signup_service_1.SignupService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map