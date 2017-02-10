"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./helper/routing/app.routing");
var auth_guard_1 = require("./helper/guards/auth.guard");
var http_1 = require("@angular/http");
var login_component_1 = require("./components/login.component");
var signup_component_1 = require("./components/signup.component");
var header_component_1 = require("./components/header.component");
var homepage_component_1 = require("./components/homepage.component");
var equal_validator_directive_1 = require("./helper/directives/equal-validator.directive");
var signup_service_1 = require("./helper/services/signup.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule, http_1.JsonpModule,],
        declarations: [app_component_1.AppComponent, equal_validator_directive_1.EqualValidator, login_component_1.LoginComponent, header_component_1.HeaderComponent, signup_component_1.SignupComponent, homepage_component_1.HomePageComponent],
        providers: [auth_guard_1.AuthGuard, signup_service_1.SignupService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map