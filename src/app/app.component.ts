import { LoginService } from './service/login.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

declare let $: any;
declare let TweenMax: any;
declare let Sine: any;
declare let getCookie: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {

  title = 'app works!!';
  data: any;
  msg: any;
  name: any;

  show: boolean = false;
  login: boolean = false;

  id: string = '';
  password: string = '';
  remember: boolean = true;

  subscription: any;
  item: number = 0;

  constructor(private service: LoginService) {
    this.login = getCookie('UserInfo') !== '' ? true : false;
  }

  clicked() {
    this.show = !this.show;
    console.log('this.show = ' + this.show);
  }

  LoginStatus(x) {
    this.service.setLoginStatus(x);
  }

  ngOnInit() {

    // 訂閱LoginService，若數值改變將觸發事件
    this.subscription = this.service.getLoginStatus()
      .subscribe(item => this.selectedNavItem(item));

    // console.log('login now: ' + this.service.getLoginStatus());
    // this.service.setLoginStatus(true);
    // console.log('login change: ' + this.service.getLoginStatus());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectedNavItem(item: boolean) {
    this.login = item;
    console.log('item=' + item);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
