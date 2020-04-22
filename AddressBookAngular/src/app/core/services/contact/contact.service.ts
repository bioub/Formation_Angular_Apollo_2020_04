import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

import { Contact } from '../../../shared/models/contact';
import { ContactServiceInterface } from './contact-service-interface';

@Injectable()
export class ContactService implements ContactServiceInterface {
  public events = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
  ) { }

  public getList$(): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      `${environment.apiServer}/contacts`,
    );
  }

  public create$(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      `${environment.apiServer}/contacts`,
      contact,
    );
  }

  public getById$(id: number): Observable<Contact> {
    return this.http.get<Contact>(
      `${environment.apiServer}/contacts/${id}`,
    );
  }
}
