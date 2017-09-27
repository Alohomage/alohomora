import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, NavbarService, UsersService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    users: string;
    model: any = {};
    loading = false;
    returnUrl: string;

  constructor(
        public nav: NavbarService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
  ) { }

  ngOnInit() {
    this.nav.hide();
      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    if (data.error) {
                        this.alertService.error(data.error);
                    } else {
                        this.router.navigate([this.returnUrl]);
                        this.alertService.success('Login successful.');
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        this.loading = false;


    }

}
