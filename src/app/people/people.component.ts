import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  mPeople: any;

  constructor(private peopleService: PeopleService) { 
    this.peopleService.getAllCharacters().subscribe(data => {
      this.mPeople = data;
      this.mPeople = this.mPeople.results;
    }, error => {
      if (error) {
        console.log(error);
      }
    })
  }

  ngOnInit() {
  }

}
