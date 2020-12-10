import { Component, OnInit, Input } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';

@Component({
  selector: 'app-sticky-note-modal',
  templateUrl: './sticky-note-modal.component.html',
  styleUrls: ['./sticky-note-modal.component.css']
})
  
export class StickyNoteModalComponent implements OnInit {
  @Input() stickyNote: StickyNote;
  
  constructor() { }
  ngOnInit(): void { }

}
