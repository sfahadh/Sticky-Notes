import { Injectable } from '@angular/core';
import { StickyNote } from '../model/sticky-note';

@Injectable({
  providedIn: 'root'
})
  
export class NotesService {
  id: number = 0;
  stickyNotes: any[] = [];

  constructor() { 
    let i = 0;
    for (let key in localStorage) {
      if (i++ === localStorage.length) break;
      this.stickyNotes.push(this.getStickyNote(parseInt(key)));
    }
  }

  getStickyNote(id: number) {
    return localStorage.getItem(id.toString());
  }

}
