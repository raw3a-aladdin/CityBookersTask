import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card.component';
import { PsngrsAllInfoComponent } from './psngrs-all-info/psngrs-all-info.component';
import { FlightCardInfoComponent } from './flight-card-info/flight-card-info.component';
import { FlightCardRoutingModule } from './flight-card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlightCardRoutingModule
  ],
  declarations: [FlightCardComponent, PsngrsAllInfoComponent, FlightCardInfoComponent],
  exports: [FlightCardComponent]
})
export class FlightCardModule { }
