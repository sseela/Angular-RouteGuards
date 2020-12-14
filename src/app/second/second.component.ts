import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  sampleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sampleForm = this.fb.group({
      name: [''],
      marks: [''],
      salary: ['']
    });
  }

  Submit() {
    console.log(this.sampleForm);
  }


}
