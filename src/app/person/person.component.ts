import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  personForm = new FormGroup(
    {
      name:new FormControl(''),
      password:new FormControl(''),
      mail:new FormControl('', [Validators.required, Validators.email]),
      phone:new FormControl('',Validators.required),
      message:new FormControl('', [Validators.required, Validators.minLength(10)]),

    });


  constructor() { }

  postPerson(){
  console.log(this.personForm.value);

  }

  ngOnInit(): void {
  }

}
