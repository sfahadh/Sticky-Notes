import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private stickyNoteService: StickyNotesService) { }
  
  ngOnInit(): void { 
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      const fetchedStickyNote = this.stickyNoteService.getStickyNote(id);
      this.stickyNote.title = fetchedStickyNote.title;
      this.stickyNote.topic = fetchedStickyNote.topic;
      this.stickyNote.description = fetchedStickyNote.description;
      this.stickyNote.color = this.getColor(fetchedStickyNote.color);
    }
  }

  save() {
    if (this.stickyNote.color !== undefined) {
      this.submitted = false;
      this.stickyNote.date = Date.now();
      this.stickyNote.color = this.getColor(this.stickyNote.color);
      this.stickyNoteService.addStickyNote(this.stickyNote);
      this.router.navigate(['']);
    } else {
      this.submitted = true;
    }
  }

  getColor(color: string) {
    const colors = {
      blue: "bg-primary",
      gray: "bg-secondary",
      green: "bg-success", 
      red: "bg-danger", 
      yellow: "bg-warning", 
      turquoise: "bg-info",
      black: "bg-dark", 
      white: "bg-light"
    }

    for (let key in colors) {
      if (key === color) {
        return colors[key];
      }
    
      if (colors[key] === color) {
        return key;
      }
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
