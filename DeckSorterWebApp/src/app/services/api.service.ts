import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, onErrorResumeNext, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { httpOptions } from 'src/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  private formatErrors(error: any) {
  return throwError(error.error);
}
get(path: string): Observable < any > {
  return this.http.get(`${environment.api_url}${path}`)
    .pipe(catchError(this.formatErrors));
}
post(path: string, params: any): Observable < any > {
  return this.http.post( `${environment.api_url}${path}`, params, httpOptions)
   .pipe(catchError(this.handleError));
}
private handleError(error: any) {

  let msg = 'Oops!!.something went wrong.Please try again.';
  if (error.status === 400) {
    msg = error.error;
  }
  return Promise.reject(msg);
}
}
