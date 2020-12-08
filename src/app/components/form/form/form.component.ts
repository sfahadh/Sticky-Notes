import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StickyNote } from 'src/app/model/sticky-note';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  stickyNote: StickyNote = new StickyNote("", "", "", "");
  submitted: boolean = false;

  constructor(private Router: Router) { }
  ngOnInit(): void { }

  save() {
    this.submitted = true;
    // this.Router.navigate(['']);
    this.stickyNote.date = Date.now();
    console.log(this.stickyNote);
  }
}
