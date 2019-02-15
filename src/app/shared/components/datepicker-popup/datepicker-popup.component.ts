import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.scss']
})


export class DatepickerPopupComponent {

  date: Date = new Date();

  @Output() childEvent = new EventEmitter();

  constructor() {
  }

  onChange(value) {
    setTimeout(() => {
      this.childEvent.emit(this.date);
       console.log(this.date);
      // console.log(value);
    }, 0);
  }
}
