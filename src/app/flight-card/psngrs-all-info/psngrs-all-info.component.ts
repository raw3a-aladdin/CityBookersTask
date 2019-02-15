import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/models/services/city.service';

@Component({
  selector: 'app-psngrs-all-info',
  templateUrl: './psngrs-all-info.component.html',
  styleUrls: ['./psngrs-all-info.component.scss']
})
export class PsngrsAllInfoComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

}
