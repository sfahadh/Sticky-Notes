import { Component, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';
import { StickyNotesService } from 'src/app/services/sticky-note.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
  
export class TodoListComponent implements OnInit {
  stickyNotes: StickyNote[];

  constructor(private stickyNoteService: StickyNotesService) { }
  ngOnInit(): void { 
    this.stickyNotes = this.stickyNoteService.getAllStickyNotes();
    console.log(this.stickyNotes);
  }

}
