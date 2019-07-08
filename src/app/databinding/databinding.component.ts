import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  title: any = "Hola mundo!";
  constructor() { }

  ngOnInit() {
  }

  push() {
    console.log(this.title);
  }

}
