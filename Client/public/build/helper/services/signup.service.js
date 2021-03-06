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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var SignupService = (function () {
    // Resolve HTTP using the constructor
    function SignupService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.signupURL = 'http://localhost:3000/auth/signup';
        this.loginURL = 'http://localhost:3000/auth/login';
    }
    SignupService.prototype.addUser = function (user) {
        var bodyString = JSON.stringify(user); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.signupURL, user, options) // ...using post request
            .map(function (res) {
            var user = res.json();
            // store user details 
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('registerMsg', "Congrats! Registration Successful");
        }).catch(function (error) { return Rx_1.Observable.throw('Email id is already registered..!'); }); //...errors if any
    };
    SignupService.prototype.getLogin = function (body) {
        console.log("second");
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.loginURL, body, options) // ...using post request
            .map(function (res) {
            var user = res.json();
            // store user details 
            localStorage.setItem('currentUser', JSON.stringify(user));
        })
            .catch(function (error) { return Rx_1.Observable.throw('Invalid user name or password'); }); //...errors if any
    };
    return SignupService;
}());
SignupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignupService);
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map