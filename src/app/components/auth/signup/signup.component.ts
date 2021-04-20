import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  maxDate:Date=new Date;;
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form);

    this.maxDate= new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18)
  }

}


//video 36