import { Component, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  stickyNotes: StickyNote[];
  constructor(private stickyNoteService: StickyNotesService) { }

  ngOnInit(): void { 
    this.stickyNotes = this.stickyNoteService.getAllStickyNotes();
  }
}
