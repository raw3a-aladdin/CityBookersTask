import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/models/services/city.service';

@Component({
  selector: 'app-flight-card-info',
  templateUrl: './flight-card-info.component.html',
  styleUrls: ['./flight-card-info.component.scss']
})
export class FlightCardInfoComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

}
