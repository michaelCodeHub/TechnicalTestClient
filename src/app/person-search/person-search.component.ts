import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  searchItem: String;

  persons: Array<any>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSearchSubmit(): void{
    console.debug(this.searchItem);
    
    this.personService.getSearch(this.searchItem).subscribe(data => {
      console.debug(data);
      this.persons = data;
    });
  }

}
