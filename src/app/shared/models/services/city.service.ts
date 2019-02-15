import { Injectable } from '@angular/core';
import { PsngrInfo } from '../interfaces/psngrInfo';

@Injectable()
export class CityService {
  cities: string[] = [
    'Cairo',
    'Alexandria',
    '6th of October',
    'Hurghada',
    'Luxur',
    'Port Said',
    'Aswan',
    'Ismailia',
    'Mansoura'
  ];

  psngrs: PsngrInfo[] = [];

  firstCity = '';
  secCity = '';

  date: Date;
  psngrsNo: number;


  addOrChangePsngr(i, obj: PsngrInfo) {
    for (let j = 0; j < this.psngrs.length; j++) {
      if (this.psngrs[j] !== null && this.psngrs[j].id === i) {
        this.psngrs[j].id = obj.id;
        this.psngrs[j].bdate = obj.bdate;
        this.psngrs[j].fname = obj.fname;
        this.psngrs[j].lname = obj.lname;
        this.psngrs[j].phNo = obj.phNo;
        return;
      }
    }
    for (let index = 0; index < this.psngrs.length; index++) {
      if (this.psngrs[index] == null) {
        this.psngrs[index] = obj;
        return;
      }
    }
    this.psngrs.push(obj);
  }

  removePsngr(i) {
    for (let j = 0; j < this.psngrs.length; j++) {
      if (this.psngrs[j] !== null && this.psngrs[j].id === i) {
        this.psngrs[j] = null;
      }
    }
  }

  getAllCities(): string[] {
    return this.cities;
  }

  setFirstCity(firstCity: string): void {
    this.firstCity = firstCity;
  }

  setSecCity(secCity: string): void {
    this.secCity = secCity;
  }

  getFirstList(): string[] {
    return this.cities.filter(e => {
      return e !== this.secCity;
    });
  }

  getSecList(): string[] {
    return this.cities.filter(e => {
      return e !== this.firstCity;
    });
  }


  constructor() { }

}
