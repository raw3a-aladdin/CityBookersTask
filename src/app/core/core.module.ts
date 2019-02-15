import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { CollapseModule, TooltipModule, DatepickerModule } from 'ngx-bootstrap';
import { CoreRoutingModule } from './core-routing.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    LoginModule
  ],
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
