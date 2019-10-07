import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonSearchComponent } from './person-search/person-search.component';

const routes: Routes = [
  {path: 'person/list', component: PersonListComponent, data: {title: 'Persons List'}},
  {path: 'person/search', component: PersonSearchComponent, data: {title: 'Persons List'}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
