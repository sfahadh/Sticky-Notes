import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  constructor(private Router: Router) { }
  ngOnInit(): void { }

  save() {
    this.Router.navigate(['']);
  }
}
