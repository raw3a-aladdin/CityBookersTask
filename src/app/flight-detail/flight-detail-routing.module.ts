import { Routes, RouterModule } from '@angular/router';
import { FlightDetailComponent } from './flight-detail.component';
import { PsngrsDetailComponent } from './psngrs-detail/psngrs-detail.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';

const routes: Routes = [
  {path: '', component: FlightDetailComponent},
  {path: 'psngrsDetails', component: PsngrsDetailComponent},
  // {path: 'flightCard', component: FlightCardComponent},
  {path: 'flightCard', loadChildren: '../flight-card/flight-card.module#FlightCardModule'}

];

export const FlightDetailRoutingModule = RouterModule.forChild(routes);
