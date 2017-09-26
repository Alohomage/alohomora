import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {APP_ROUTING} from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DiscussionComponent } from './components/discussion/discussion.component';

import { StackoverflowService } from './services/stackoverflow.service';
import { NavbarService } from './services/navbar.service';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DiscussionComponent,
    CapitalizadoPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    StackoverflowService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
