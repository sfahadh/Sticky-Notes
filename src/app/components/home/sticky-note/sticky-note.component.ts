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
  ngOnInit(): void { }

  edit(id: number) {
    console.log(id);
  }

  delete(id: number) {
    this.stickyNoteService.deleteStickyNote(id.toString());
  }
}
