import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/src';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';
import { Season1Component } from './league/season1/season1.component';

const pagesRoutes: Routes = [
  { path: 'about',  component: AboutComponent },
  { path: 'o-smta',  component: AboutComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'kluby', component: ClubsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'kontakty', component: ContactsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'dokumenty', component: DocumentsComponent },
  // { path: '', component: HomeComponent },
  { path: 'league', component: LeagueComponent },
  { path: 'liga/pravidla', component: LeagueComponent },
  { path: 'liga/sezona-2017-18', component: Season1Component },

  { path: '', redirectTo: 'o-smta', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PagesRoutingModule { }
