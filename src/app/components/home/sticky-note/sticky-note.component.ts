import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
  
export class StickyNoteComponent implements OnInit {
  @Input() stickyNote: StickyNote;
  
  constructor() { }
  ngOnInit(): void { 
    console.log(this.stickyNote.color);
  }

}
