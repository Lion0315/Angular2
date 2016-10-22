import { Injectable, EventEmitter } from '@angular/core';

//let loginStatus = false;

@Injectable()
export class LoginService {

    navchange: EventEmitter<boolean> = new EventEmitter();
    constructor() { }

    getLoginStatus() {
        return this.navchange;
    }

    setLoginStatus(status: boolean) {
        this.navchange.emit(status);
    }
}
