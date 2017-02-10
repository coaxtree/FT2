import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../components/login.component';
import { SignupComponent } from '../../components/signup.component';
import { HomePageComponent } from '../../components/homepage.component';
import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'homepage', component: HomePageComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);