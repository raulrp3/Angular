import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  selectedPerson: Person = new Person();

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  update(person: any){
    console.log(person);
  }

  delete(person: any){
    console.log(person);
  }

  add(){
    console.log(this.selectedPerson);
  }

}
