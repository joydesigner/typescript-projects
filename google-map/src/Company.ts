import faker from 'faker';
import { Mappable } from '../src/CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  }
  constructor () {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent (): string {
    return `<div>
              <h1>Company name: ${this.companyName}</h1>
              <h2>Catch phrase: ${this.catchPhrase}</h2>
           </div>`;
  }
}