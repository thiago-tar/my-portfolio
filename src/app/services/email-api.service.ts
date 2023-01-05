import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../model/contact';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.emailAPI_URL;
  private apiAuthToken = environment.emailAPI_AUTH_TOKEN;
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.apiAuthToken);

  sendEmail = (contact: Contact): Observable<any> => {
    var url = this.apiUrl + 'email';
    return this.http.post<HttpResponse<any>>(url, contact, { headers: this.headers });
  };

  ping = (): Observable<any> => {
    var url = this.apiUrl + 'ping';
    return this.http.get(url, { headers: this.headers });
  };
}
