import { Injectable } from '@angular/core';
import { Userinfo } from '../interfaces/userinfo';

@Injectable()

export class UserInfoService {
userInfo: Userinfo = {email: '', pwd: ''};

constructor() { }
  setUserInfo(email: string , pwd: string) {
    this.userInfo.email = email;
    this.userInfo.pwd = pwd;
  }

  getUserInfo(): Userinfo {
    return this.userInfo;
  }
}
