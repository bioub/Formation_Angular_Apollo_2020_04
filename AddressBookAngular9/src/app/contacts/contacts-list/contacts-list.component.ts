import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../shared/models/contact';


@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title.setTitle(data.title);
    });

    this.refreshList();
    this.contactService.events.pipe(
      filter(e => e === 'contact.write')
    )
      .subscribe(e => this.refreshList());
  }

  public refreshList() {
    this.contactService.getList$().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
