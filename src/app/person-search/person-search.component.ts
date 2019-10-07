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
    private flashMessage: FlashMessagesService,
    private personService: PersonService,
  ) { }

  ngOnInit() {
  }

  onSearchSubmit(): void {

    if (this.searchItem != null) {

      this.personService.getSearch(this.searchItem).subscribe(data => {
        this.persons = data;
        this.flashMessage.show(this.persons.length + " persons found.", {
          cssClass: "alert-info",
          timeOut: 3000
        });
      });

    } else {
      this.flashMessage.show("Please enter a name", {
        cssClass: "alert-danger",
        timeOut: 3000
      });
    }
  }

}
