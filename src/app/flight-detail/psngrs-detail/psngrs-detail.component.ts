import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/models/services/city.service';
import { PsngrInfo } from 'src/app/shared/models/interfaces/psngrInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psngrs-detail',
  templateUrl: './psngrs-detail.component.html',
  styleUrls: ['./psngrs-detail.component.scss']
})
export class PsngrsDetailComponent implements OnInit {
  onepsngr: PsngrInfo;
  sizeArray;

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit() {
    this.sizeArray = Array(this.cityService.psngrsNo);
  }

  onSubmit() {
    console.log(this.router.config);
    console.log(this.router.onSameUrlNavigation);

    this.router.navigate(['flightDetails/flightCard']);
  }

  checkValidity(i) {
    if (this.onepsngr) {
      this.cityService.addOrChangePsngr(i, this.onepsngr);
      // console.log(this.onepsngr);
    } else {
      this.cityService.removePsngr(i);
    }
    console.log(this.router.config);
  }

  allValid() {
    for (let index = 0; index < this.cityService.psngrsNo; index++) {
      if (!this.cityService.psngrs[index]) {
        return false;
      }
    }
    return true;
  }

}
