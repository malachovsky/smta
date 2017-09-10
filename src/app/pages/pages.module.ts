import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LeagueComponent } from './league/league.component';
import { ClubsComponent } from './clubs/clubs.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AboutComponent, LeagueComponent, ClubsComponent, DocumentsComponent, ContactsComponent]
})
export class PagesModule { }
