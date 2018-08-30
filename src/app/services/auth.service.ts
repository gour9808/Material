import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
userSession = localStorage.getItem('session');
    constructor(private router: Router) {
        console.log("user session from auth service", this.userSession);
    }

    public createSession(data) {
        this.userSession = data;
    }

    public isAuthenticated() {
        if (this.userSession && this.userSession) {
            return true;
        }
        return false;
    }
    public getToken() {
        return this.userSession ? this.userSession : false;
    }
}
/**
 * Authentication strategy
 * Store token and time when received.
 *
 */
