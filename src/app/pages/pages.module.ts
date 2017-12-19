import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LeagueComponent } from './league/league.component';
import { ClubsComponent } from './clubs/clubs.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagesRoutingModule } from './pages-routing.module';
import { Season1Component } from './league/season1/season1.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    LeagueComponent,
    ClubsComponent,
    DocumentsComponent,
    ContactsComponent,
    Season1Component
  ]
})
export class PagesModule { }
