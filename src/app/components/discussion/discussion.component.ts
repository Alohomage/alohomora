import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StackoverflowService} from '../../services/stackoverflow.service';


@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html'
})
export class DiscussionComponent implements OnInit {

  discussions:any;

  constructor(private activatedRoute: ActivatedRoute, private _stackoverflowService: StackoverflowService) { }

  ngOnInit() {

    this.activatedRoute.params
     .map(parametros => parametros['id'])
     .subscribe(id => {
           this._stackoverflowService.getSearch('test')
           .subscribe(
           data=>  {
            this.discussions = data;
           });
     })

  }

}


