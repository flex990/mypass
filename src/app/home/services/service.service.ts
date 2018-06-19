import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { Service } from '../../model/service';

@Injectable()
export class ServiceService {

  constructor( private http: HttpClient ) {}

  loadServices() {
    return this.http.get<Service[]>(`${environment.serverAPIURL}/services`);
  }
}

