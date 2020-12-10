import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';
import { getColor } from '../../../functions/getColor'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  stickyNote: StickyNote = new StickyNote(0, "", "", "", "");
  submitted: boolean = false;
  edittingForm: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private stickyNoteService: StickyNotesService) { }
  
  ngOnInit(): void { 
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.edittingForm = true;
      const fetchedStickyNote = this.stickyNoteService.getStickyNote(id);
      this.stickyNote.title = fetchedStickyNote.title;
      this.stickyNote.topic = fetchedStickyNote.topic;
      this.stickyNote.description = fetchedStickyNote.description;
      this.stickyNote.color = getColor(fetchedStickyNote.color);
      this.stickyNote.id = id;
    }
  }

  save() {
    if (this.stickyNote.color !== undefined) {
      this.submitted = false;
      this.stickyNote.date = Date.now();
      this.stickyNote.color = getColor(this.stickyNote.color);
      
      if (this.edittingForm) {
        this.stickyNoteService.editStickyNote(this.stickyNote);
        this.edittingForm = false;
      } else {
        this.stickyNoteService.addStickyNote(this.stickyNote);
      }

      this.router.navigate(['']);
    } else {
      this.submitted = true;
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
