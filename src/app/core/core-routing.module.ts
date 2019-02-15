import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'flightDetails', loadChildren: '../flight-detail/flight-detail.module#FlightDetailModule'}
];

export const CoreRoutingModule = RouterModule.forChild(routes);
