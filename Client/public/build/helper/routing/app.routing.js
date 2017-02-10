"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("../../components/login.component");
var signup_component_1 = require("../../components/signup.component");
var homepage_component_1 = require("../../components/homepage.component");
var auth_guard_1 = require("../guards/auth.guard");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'homepage', component: homepage_component_1.HomePageComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map