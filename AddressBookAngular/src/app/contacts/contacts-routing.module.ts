import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';

const routes: Routes = [{
  path: 'contacts',
  component: ContactsListComponent,
  data: {
    title: 'Contacts',
  },
  children: [{
    path: 'add',
    component: ContactsAddComponent,
  }, {
    path: ':id',
    component: ContactsShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
