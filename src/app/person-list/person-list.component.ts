import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  
  persons: Array<any>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    
    this.personService.getList().subscribe(data => {
      console.debug(data);
      this.persons = data;
    });
  }

}
