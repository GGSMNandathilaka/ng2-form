import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  genders = ['Male', 'Female', 'Unkown'];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      console.log('Value:', v);
    });
  }

  createForm() {
    this.form = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      address1: [''],
      address2: [''],
      city: '',
      state: '',
      zip: '',
      dob: '',
      gender: '',
      food: ''
    });
  }
}
