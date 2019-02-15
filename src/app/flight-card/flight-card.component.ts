import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/models/services/city.service';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

}
