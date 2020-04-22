import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../core/services/contact/contact.service';
import { Contact } from '../../shared/models/contact';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public contact: Contact = {
    firstName: '',
    lastName: '',
  };

  constructor(
    private router: Router,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
  }

  public addContact() {
    this.contactService.create$(this.contact)
      .subscribe((contact: Contact) => {
        this.router.navigate(['contacts', contact.id]);
        this.contactService.events.emit('contact.write');
      });
  }
}
