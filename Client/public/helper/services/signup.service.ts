import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Signup } from '../interface/signup.interface';
import { Login } from '../interface/login.interface';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    // private instance variable to hold base url
    private signupURL = 'http://localhost:3000/api/signup';
    private loginURL = 'http://localhost:3000/api/login';

    addUser(body: Object): Observable<Signup[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.signupURL, body, options) // ...using post request
            .map((res: Response) => {
                let user = res.json();
                // store user details 
                localStorage.setItem('currentUser', JSON.stringify(user));

            }).catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }



    getLogin(body: Object): Observable<Login[]> {
        console.log("second")
       let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.loginURL, body, options) // ...using post request
            .map((res: Response) =>res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    login1(familyName: string, email: string, password: string) {
           console.log("second")
        return this.http.post(this.loginURL, JSON.stringify({ familyName: familyName, email: email, password: password }))
            .map((response: Response) => response.json())
                  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

     getUser() : Observable<Login[]> {
              console.log("second");

         // ...using get request
         return this.http.get(this.loginURL)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

 


}