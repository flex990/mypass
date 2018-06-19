import { Service } from '../../model/service';

export class ServiceStore {
  /**
   * List of services
   */
  services: Service[];

  setServices( services: Service[]) {
    this.services = services;
  }
}
