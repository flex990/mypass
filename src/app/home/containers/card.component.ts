import { Component, OnInit } from '@angular/core';
import {ServiceActions} from '../services/service.action';
import {ServiceStore} from '../services/service.store';

@Component({
  selector: 'app-card',
  template: `
    <div class="panel panel-default" *ngFor="let service of store.services">
      <div class="panel-body">{{service.username}}</div>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  constructor(
    public actions: ServiceActions,
    public store: ServiceStore,
  ) {
    this.actions.loadServices();
  }

  ngOnInit() {
  }

}
