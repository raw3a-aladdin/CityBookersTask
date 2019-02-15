import { NgModule } from '@angular/core';
import { DatepickerPopupComponent } from './components/datepicker-popup/datepicker-popup.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      DatepickerPopupComponent
   ],
   imports: [
       FormsModule,
       BsDatepickerModule.forRoot()
   ],
   exports: [
       DatepickerPopupComponent
   ]
})
export class SharedModule { }
