import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInfoService } from '../shared/models/services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = null;
  pwd = null;
  constructor(private userInfoService: UserInfoService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userInfoService.setUserInfo(form.value.email, form.value.pwd);
    this.router.navigate(['flightDetails']);
  }

  emailValid() {
    // tslint:disable-next-line:max-line-length
    const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return re.test(String(this.email).toLowerCase());
  }

  pwdValid() {
    const strongRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    return strongRegex.test(String(this.pwd).toLowerCase());
  }

}
