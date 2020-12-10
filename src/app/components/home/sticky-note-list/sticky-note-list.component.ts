import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-sticky-note-list',
  templateUrl: './sticky-note-list.component.html',
  styleUrls: ['./sticky-note-list.component.css']
})
  
export class StickyNoteListComponent implements OnInit {
  @Input() stickyNotes: StickyNote[];
  @Input() colorSelected: string;
  @Input() topicSelected: string;

  constructor() { }
  ngOnInit(): void { }
}
