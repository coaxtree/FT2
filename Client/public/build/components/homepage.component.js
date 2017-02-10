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
var signup_service_1 = require("../helper/services/signup.service");
var HomePageComponent = (function () {
    function HomePageComponent(signupService) {
        this.signupService = signupService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '../../html/homepage.component.html',
        styleUrls: ['../../stylesheets/signup.component.css']
    }),
    __metadata("design:paramtypes", [signup_service_1.SignupService])
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=homepage.component.js.map