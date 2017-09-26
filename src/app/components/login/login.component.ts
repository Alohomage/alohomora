import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  users: string;

  constructor( public nav: NavbarService, private _usersService: UsersService, private activatedRoute: ActivatedRoute ) { }
  ngOnInit() {
    this.nav.hide();

    this.activatedRoute.params
        .map(parametros => parametros['id'])
        .subscribe(id => {
          this._usersService.getUsers()
              .subscribe(
                  data =>  {
                    console.log(data);
                    this.users = data;
                  });
        })

  }



}
