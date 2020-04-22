import { EventEmitter, Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { Contact } from '../../shared/models/contact';
import { ContactServiceInterface } from './contact-service-interface';

@Injectable({
  providedIn: 'root'
})
export class FakeContactService implements ContactServiceInterface {
  public events = new EventEmitter<string>();

  private contacts: Contact[] = [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  }, {
    id: 2,
    firstName: 'Toto',
    lastName: 'Titi',
  }];

  constructor() { }

  public getList$(): Observable<Contact[]> {
    return of(this.contacts).pipe(delay(500));
  }

  create$(contact: Contact): Observable<Contact> {
    const nextId = this.contacts[this.contacts.length - 1].id + 1;
    contact.id = nextId;
    this.contacts.push(contact);

    return of(contact);
  }

  public getById$(id: number): Observable<Contact> {
    const contact = this.contacts.find(c => c.id === id);

    if (id === 1) {
      return of(contact).pipe(delay(3000));
    } else {
      return of(contact).pipe(delay(500));
    }
  }
}
