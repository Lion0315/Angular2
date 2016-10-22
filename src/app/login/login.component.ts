import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

// import {
//   CanActivate, Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot
// } from '@angular/router';

declare let $: any;
declare let TweenMax: any;
declare let Sine: any;
declare let setCookie: any;
declare let getCookie: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'app works!!';
  data: any;
  msg: any;
  result: any;
  name: any;

  show: boolean = false;

  id: string = '';
  password: string = '';
  remember: boolean = false;

  clicked() {
    this.show = !this.show;
  }

  newMajor() {

    console.log(this.remember);

    if (this.id === '' || this.password === '') {
      alert('ID or password 尚未填寫');
    }

    let url = `http://localhost:25959/api/login?acc=${this.id}&pw=${this.password}`;
    this.http.get(url)
      .subscribe(value => {
        this.data = value.json();
        this.result = this.data['Code'];
        console.log(this.result);
        // 登入成功轉址
        if (this.result === 1) {
          let exdays: number;
          exdays = this.remember ? 14 : 1;
          setCookie('UserInfo', this.id, exdays);

          // 設定已是登入狀態
          this.service.setLoginStatus(true);
          console.log('change value: ' + this.service.getLoginStatus());
          // 登入成功導入到Home
          this.router.navigate(['/home', { foo: 'foo' }]);
        }
      });
  }


  constructor(private http: Http, private router: Router, private service: LoginService) {

  }

  ngOnInit() {

    if (getCookie('UserInfo') !== '') {
      window.location.href = '/';
    }

    $('body').css('background-image', 'url(http://www.hdwallpapers.in/walls/windows_7_original-wide.jpg)');

    $('#login-button').click(function () {
      $('#login-button').fadeOut('slow', function () {
        $('#container').fadeIn();
        TweenMax.from('#container', .4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to('#container', .4, { scale: 1, ease: Sine.easeInOut });
      });
    });

    $('.close-btn').click(function () {
      TweenMax.from('#container', .4, { scale: 1, ease: Sine.easeInOut });
      TweenMax.to('#container', .4, { left: '0px', scale: 0, ease: Sine.easeInOut });
      $('#container, #forgotten-container').fadeOut(800, function () {
        $('#login-button').fadeIn(800);
      });
    });

    /* Forgotten Password */
    $('#forgotten').click(function () {
      $('#container').fadeOut(function () {
        $('#forgotten-container').fadeIn();
      });
    });
  }
}
