import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserInfoService } from './shared/models/services/user-info.service';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { CityService } from './shared/models/services/city.service';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      CoreModule,
      AppRoutingModule
   ],
   providers: [
      UserInfoService,
      CityService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
