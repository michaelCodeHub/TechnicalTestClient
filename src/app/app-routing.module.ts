import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: PersonListComponent, data: {title: 'Persons List'}},
  {path: 'about', component: HomeComponent, data: {title: 'About'}},
  {path: 'person/list', component: PersonListComponent, data: {title: 'Persons List'}},
  {path: 'person/search', component: PersonSearchComponent, data: {title: 'Persons Search'}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
