import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Array<any>;

  constructor(private personService: PersonService,
    private flashMessage: FlashMessagesService, ) { }

  ngOnInit() {
    this.showPersonList();
  }

  showPersonList():void{
    this.personService.getList().subscribe(data => {
      this.persons = data;

      this.flashMessage.show(this.persons.length + " persons found.", {
        cssClass: "alert-info",
        timeOut: 3000
      });

    });
  }

}
