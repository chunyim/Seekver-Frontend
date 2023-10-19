// Angular 14 Http Interceptor
// HttpInterceptor has intercept() method to inspect 
// and transform HTTP requests before they are sent to server.
// HttpRequestInterceptor implements HttpInterceptor. 
// we need to add withCredentials: true, 
// to make browser include Cookie on the Request header (HttpOnly Cookie).


// intercept() gets HTTPRequest object, change it and forward to HttpHandler object’s handle() method. 
// It transforms HTTPRequest object into an Observable<HttpEvents>.
// next: HttpHandler object represents the next interceptor in the chain of interceptors. 
// The final ‘next’ in the chain is the Angular HttpClient.

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("logging before:", req); 

    req = req.clone({
      withCredentials: true,
    });
    console.log("logging after:", req); 
    return next.handle(req);
  }
}
 
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
