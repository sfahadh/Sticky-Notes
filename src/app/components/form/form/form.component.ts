import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  stickyNote: StickyNote = new StickyNote(0, "", "", "", "");
  submitted: boolean = false;

  constructor(private Router: Router, private stickyNoteService: StickyNotesService) { }
  ngOnInit(): void { }

  save() {
    if (this.stickyNote.color !== undefined) {
      this.submitted = false;
      this.stickyNote.date = Date.now();
      this.stickyNoteService.addStickyNote(this.stickyNote);
      console.log(this.stickyNote);
      this.Router.navigate(['']);
    } else {
      this.submitted = true;
    }
  }

  cancel() {
    this.Router.navigate(['']);
  }
}
