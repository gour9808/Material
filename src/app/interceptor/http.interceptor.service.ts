import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Subject, Observable } from '../../../node_modules/rxjs';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    private _pendingRequests = 0;
    private _pendingRequestsStatus = new Subject();
    userSession = localStorage.getItem('session');

    constructor(private router: Router, private auth: AuthService) {
       
        console.log("interceptor", this.userSession);

       
    }


    private _requestStarted() {
        this._pendingRequestsStatus.next({
            started: this._pendingRequests === 0,
            pendingRequests: ++this._pendingRequests
        });
    }

    private _requestEnded() {
        this._pendingRequestsStatus.next({
            completed: this._pendingRequests === 1,
            pendingRequests: --this._pendingRequests
        });
    }

    private handleError(error) {
        switch (error.status) {
            case 401:
            case 403:
                console.log('Session Expired. Show Alert and redirect to login', error);
                this.router.navigate(['/auth']);
                break;
            case 500:
                console.log('Something broke from server. Show 500 page');
                
                break;
            case 409:
                console.error('Intercepted Error', error);
                break;
           
               
        }
        this._requestEnded();
        return Observable.throw(error);
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.auth.isAuthenticated()) {
            this._requestStarted();
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });

            return next.handle(request)
                
        }
       

    }
}
