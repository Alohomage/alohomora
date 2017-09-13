import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StackoverflowService {

    items:any [] = [];

  urlBusqueda:string = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow';

  constructor(private http: Http) { }

  getSearch( termino: string ) {

    let headers = new Headers();
    let url = this.urlBusqueda;

    return this.http.get( url, {headers} )
              .map( res => {
                  this.items = res.json().items;
                  return this.items
              })
  }



}
