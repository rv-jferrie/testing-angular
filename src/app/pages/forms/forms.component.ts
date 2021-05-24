import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert(JSON.stringify(this.profileForm.value));
  }
}
