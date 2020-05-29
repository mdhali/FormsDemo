import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {

  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName': '',
      'lastName': '',
      'gender': ['Female'],
      'hiking': false,
      'running': true,
      'swimming': false,
      'address': {
        'door': '',
        'completeaddress': ''
      }
    })
  }

  submitForm(value: any) {
    console.log('Reactive Form Data: ')
    console.log(value);
    console.log(this.complexForm.value);
  }

}
