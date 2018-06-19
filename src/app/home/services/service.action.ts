import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { ServiceService } from './service.service';
import { ServiceStore } from './service.store';

@Injectable()
export class ServiceActions {

  constructor(
    private serviceService: ServiceService,
    private serviceStore: ServiceStore
  ) {}

  loadServices() {
    this.serviceService.loadServices()
      .subscribe(res => this.serviceStore.setServices(res));
  }

}
