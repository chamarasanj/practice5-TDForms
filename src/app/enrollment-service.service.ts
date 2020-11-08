import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserData } from './user-data';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {

  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: UserData) {
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
