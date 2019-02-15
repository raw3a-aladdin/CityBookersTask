import { Component, Input } from '@angular/core';
import { CityService } from '../shared/models/services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})

export class FlightDetailComponent {

  firstList = this.cityService.getAllCities();
  secList = this.cityService.getAllCities();
  psngrsNo: number;
  date: Date;

  states = ['rawaa', 'omar', 'ali', 'moh', 'jjksadj'];
  selectedState = 'rawaa';
  constructor(private cityService: CityService, public router: Router) {
  }

  setFirstCity(firstCity: HTMLInputElement) {
    this.cityService.setFirstCity(firstCity.value);
    this.secList = this.cityService.getSecList();
  }
  setSecCity(secCity: HTMLInputElement) {
    this.cityService.setSecCity(secCity.value);
    this.firstList = this.cityService.getFirstList();
    // console.log(this.date);
  }

  onSubmit() {
    this.cityService.date = this.date;
    this.cityService.psngrsNo = this.psngrsNo;
    this.router.navigate(['flightDetails/psngrsDetails']);
  }
}
