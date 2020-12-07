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

  constructor(private Router: Router) { }
  ngOnInit(): void { }

  save() {
    // this.Router.navigate(['']);
    this.stickyNote.date = Date.now();
    this.stickyNote.color = "white"
    console.log(this.stickyNote);
  }
}
