import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  people: AngularFireList<any>;

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getPeople(){
    this.people = this.angularFireDatabase.list('person');
    return this.people;
  }

  addPerson(person: Person){
    this.people.push({
      name: person.name,
      lastname: person.lastname,
      age: person.age,
      dni: person.dni
    });
  }

  updatePerson(id: any, person: Person){
    this.people.update(id, {
      name: person.name,
      lastname: person.lastname,
      age: person.age,
      dni: person.dni
    });
  }

  deletePerson(id: any){
    this.people.remove(id);
  }
}
