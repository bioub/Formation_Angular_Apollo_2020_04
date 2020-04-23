import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Contact } from '../../shared/models/contact';
import { ContactServiceInterface } from './contact-service-interface';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService implements ContactServiceInterface {
  public events = new EventEmitter<string>();

  private cacheList$: Observable<Contact[]>;

  constructor(private http: HttpClient) {}

  public getList$(useCache = true): Observable<Contact[]> {
    if (!useCache) {
      return this.http.get<Contact[]>(`${environment.apiServer}/contacts`);
    }

    if (!this.cacheList$) {
      this.cacheList$ = this.http
        .get<Contact[]>(`${environment.apiServer}/contacts`)
        .pipe(shareReplay(1));
    }

    return this.cacheList$;
  }

  public create$(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      `${environment.apiServer}/contacts`,
      contact
    );
  }

  public getById$(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiServer}/contacts/${id}`);
  }
}
