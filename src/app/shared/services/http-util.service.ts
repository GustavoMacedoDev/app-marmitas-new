import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers() {
  	let httpHeaders: HttpHeaders = new HttpHeaders();
	httpHeaders.append('Content-Type', 'application/json');
  	if (localStorage['token']) {
  	  httpHeaders = httpHeaders.set(
  	  	'Authorization', 'Bearer ' + localStorage['token']
  	  );
  	}
    
    return { headers: httpHeaders };
  }
}
