import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  mForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.mForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      lastname: [
        '',
        Validators.required
      ],
      email: [
        'example@gmail.es',
        Validators.required
      ]
    })
   }

  ngOnInit() {
  }

  send(mForm){
    console.log(mForm);
  }

}
