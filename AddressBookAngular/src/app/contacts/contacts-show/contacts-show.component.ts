import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ContactService } from './../../core/services/contact/contact.service';
import { Contact } from './../../shared/models/contact';

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
    this.route.params
      .map(params => Number(params.id))
      .switchMap((id: number) => this.contactService.getById$(id))
      .subscribe(contact => {
        this.contact = contact;
      });
  }

}
