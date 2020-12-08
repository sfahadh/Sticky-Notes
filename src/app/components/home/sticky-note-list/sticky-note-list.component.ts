import { Component, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-sticky-note-list',
  templateUrl: './sticky-note-list.component.html',
  styleUrls: ['./sticky-note-list.component.css']
})
  
export class StickyNoteListComponent implements OnInit {
  stickyNotes: StickyNote[];

  constructor(private stickyNoteService: StickyNotesService) { }
  ngOnInit(): void { 
    this.stickyNotes = this.stickyNoteService.getAllStickyNotes();
    console.log(this.stickyNotes);
  }
}
