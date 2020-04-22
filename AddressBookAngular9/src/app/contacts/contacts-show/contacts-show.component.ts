import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../services/contact.service';
import { Contact } from './../../shared/models/contact';

import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {
  public contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      map(params => Number(params.id)),
      switchMap((id: number) => this.contactService.getById$(id)),
    )
      .subscribe(contact => {
        this.contact = contact;
      });
  }

}
