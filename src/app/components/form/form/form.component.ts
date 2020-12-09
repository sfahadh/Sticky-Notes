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
      this.stickyNote.color = "red";
    }
  }

  save() {
    if (this.stickyNote.color !== undefined) {
      this.submitted = false;
      this.stickyNote.date = Date.now();
      this.stickyNote.color = this.assignBootstrapColor(this.stickyNote.color);
      this.stickyNoteService.addStickyNote(this.stickyNote);
      this.router.navigate(['']);
    } else {
      this.submitted = true;
    }
  }

  assignBootstrapColor(color: string) {
    switch (color) {
      case "blue":
        return "bg-primary";
      case "gray":
        return "bg-secondary";
      case "green":
        return "bg-success";
      case "red":
        return "bg-danger";
      case "yellow":
        return "bg-warning";
      case "turquoise":
        return "bg-info";
      case "black":
        return "bg-dark";
      case "white":
        return "bg-light";
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
