import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import { CardComponent } from './containers/card.component';
import { HomebarComponent } from './containers/homebar.component';
import {ServiceService} from './services/service.service';
import {ServiceActions} from './services/service.action';
import {ServiceStore} from './services/service.store';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, CardComponent, HomebarComponent],
  providers: [ServiceService, ServiceActions, ServiceStore]
})
export class HomeModule { }
