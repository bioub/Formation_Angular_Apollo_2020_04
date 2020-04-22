import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';

@NgModule({
  imports: [
    ContactsRoutingModule,
    SharedModule,
  ],
  declarations: [ContactsListComponent, ContactsShowComponent, ContactsAddComponent]
})
export class ContactsModule { }
