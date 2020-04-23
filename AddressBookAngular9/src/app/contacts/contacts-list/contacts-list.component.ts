import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { filter, startWith, switchMap, tap, catchError, finalize } from 'rxjs/operators';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../shared/models/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  public contacts$: Observable<Contact[]>;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title.setTitle(data.title);
    });

    /*
    Grace aux opérateurs de rxjs, supprimer
    la fonction refreshList.

    this.contactService.events
    // initialiser events avec un première valeur 'contact.write' (startWith)
    // utiliser switchMap pour déclencher la requete avec this.contactService.getList$()
    */

    // -----------(refresh)-----(reload)----(refresh)----...
    // startWith('refresh'),
    // (refresh)--(refresh)-----(reload)----(refresh)----...
    // filter((e) => e === 'refresh'),
    // (refresh)--(refresh)-----------------(refresh)----...

    this.contacts$ = this.contactService.events
      .pipe(
        startWith('refresh'),
        filter((e) => e === 'refresh'),
        tap(() => this.loading = true),
        switchMap(() => this.contactService.getList$()),
        finalize(() => this.loading = false),
      );
  }
}
