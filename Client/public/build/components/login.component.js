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
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var signup_service_1 = require("../helper/services/signup.service");
var LoginComponent = (function () {
    function LoginComponent(signupService, router) {
        this.signupService = signupService;
        this.router = router;
        this.users = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = {
            familyName: '',
            email: '',
            password: '',
        };
    };
    LoginComponent.prototype.loadAllUsers = function () {
        var _this = this;
        console.log("first");
        this.signupService.getAll(this.login.familyName, this.login.email, this.login.password).subscribe(function (users) {
            //  this.users=users;
            _this.router.navigate(['/homepage']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '../../html/login.component.html',
        styleUrls: ['../../stylesheets/login.component.css']
    }),
    __metadata("design:paramtypes", [signup_service_1.SignupService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map