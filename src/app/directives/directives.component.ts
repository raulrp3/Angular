import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  people: any = [{name: "Raúl", lastname: "Ramírez Pérez", age: 22}, {name: "Daniel", lastname: "Ramírez Pérez", age: 29}, {name: "Ginés", lastname: "Ramírez Fernández", age: 56}, {name: "Agustina", lastname: "Pérez Cruz", age: 51}];
  text: any = "MOSTRAR";
  show: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getPerson(person: any) {
    alert(person.lastname + ", " + person.name);
  }

  showPeople() {
    this.show = !this.show;
    this.text = this.show === false ? "MOSTRAR" : "OCULTAR";
  }

}
