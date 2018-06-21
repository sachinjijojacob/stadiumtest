import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from '../main-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})



export class AddComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private mainservice:  MainService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      id: [''],
      title: [''],
      imgURL: [''],
      details: [''],
      moreDetails: ['']
    });
  }

  addStadium(){
    // console.log(this.myForm.value)
    this.mainservice.addData((this.myForm.value))
  }
}
