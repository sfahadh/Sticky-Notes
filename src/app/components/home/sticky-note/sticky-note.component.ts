import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
  
export class StickyNoteComponent implements OnInit {
  @Input() stickyNote: StickyNote;
  
  constructor(private stickyNoteService: StickyNotesService) { }
  ngOnInit(): void { 
    console.log(this.stickyNote.color);
  }

  edit(id: string) {
    console.log(id);
  }

  delete(id: string) {
    this.stickyNoteService.deleteStickyNote(id);
  }
}
