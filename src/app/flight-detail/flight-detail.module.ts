import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailComponent } from './flight-detail.component';
import { BsDatepickerModule, TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlightDetailRoutingModule } from './flight-detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PsngrsDetailComponent } from './psngrs-detail/psngrs-detail.component';
import { OnePsngrComponent } from './psngrs-detail/one-psngr/one-psngr.component';
import { FlightCardModule } from '../flight-card/flight-card.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    FlightDetailRoutingModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    FlightDetailComponent,
    PsngrsDetailComponent,
    OnePsngrComponent
  ],
  exports: [
    FlightDetailComponent
  ]
})
export class FlightDetailModule { }
