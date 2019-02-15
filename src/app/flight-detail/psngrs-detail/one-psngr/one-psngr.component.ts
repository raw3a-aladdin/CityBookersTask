import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-one-psngr',
  templateUrl: './one-psngr.component.html',
  styleUrls: ['./one-psngr.component.scss']
})
export class OnePsngrComponent implements OnInit {
  fname: string;
  lname: string;
  date: Date;
  phNo: string;
  valid = false;
  @Input() ids: string;

  @Output() childEvent = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  nameValid(name): boolean {
    return /^[a-zA-Z ]+$/.test(name.value);
  }

  onChange(fn , ln, pn) {
    this.valid = this.nameValid(fn) && this.nameValid(ln);
    if (this.valid) {
      this.childEvent.emit({fname: this.fname, lname: this.lname , bdate: this.date, id: this.ids , phNo: this.phNo});
    } else {
      this.childEvent.emit(false);
    }
    console.log(this.ids);
  }
}
