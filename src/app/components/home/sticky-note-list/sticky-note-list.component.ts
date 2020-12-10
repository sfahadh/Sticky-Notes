import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';

@Component({
  selector: 'app-sticky-note-list',
  templateUrl: './sticky-note-list.component.html',
  styleUrls: ['./sticky-note-list.component.css']
})
  
export class StickyNoteListComponent implements OnInit {
  @Input() stickyNotes: StickyNote[];
  @Input() colorSelected: string;
  @Input() topicSelected: string;

  stickyNote: StickyNote;

  constructor() { }
  ngOnInit(): void { }

  passedStickyNote(stickyNote) {
    this.stickyNote = stickyNote;
  }
}
