import { Injectable } from '@angular/core';
import {Users} from '../class/users';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

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


}
