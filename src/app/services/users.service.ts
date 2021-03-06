import { Injectable } from '@angular/core';
import {Users} from '../class/users';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class UsersService {

    private endpoint: string = "http://spell.alohomora.dev/api/users";


    users: Users[] = [];
        constructor(private http: Http) {
    }

    getUsers() {
        return this.http.get(this.endpoint)
            .map(res => res.json());
    }

    login(username: string, password: string) {
            console.log(username);
        /*return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


}
