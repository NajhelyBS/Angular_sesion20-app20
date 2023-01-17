import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpEvent<any>> {
 
      console.log('intercepción hecha - datos mostrándose');

      const newRequest = request.clone({setHeaders:{  //duplicación del request
        Authorization: 'Bearer 1234567890'    //seteo de dato de cabecera (Autorización)
      }})
      
      return next.handle(newRequest);
    };

    
}

