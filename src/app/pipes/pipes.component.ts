import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  people: any = [{id: 1, name: "raúl", lastname: "ramírez pérez", salary: 1200}, {id: 2, name: "daniel", lastname: "ramírez pérez", salary: 1500}];

  constructor() { }

  ngOnInit() {
  }

}
