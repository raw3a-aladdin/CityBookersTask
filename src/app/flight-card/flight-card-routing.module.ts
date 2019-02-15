import { Routes, RouterModule } from '@angular/router';
import { FlightCardComponent } from './flight-card.component';

const routes: Routes = [
  {path: '', component: FlightCardComponent}
];

export const FlightCardRoutingModule = RouterModule.forChild(routes);
