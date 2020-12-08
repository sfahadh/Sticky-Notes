import { Injectable } from '@angular/core';
import { StickyNote } from '../model/sticky-note';

@Injectable({
  providedIn: 'root'
})
  
export class StickyNotesService {
  id: number = 0;
  stickyNotes: any[] = [];

  constructor() { 
    let i = 0;
    for (let key in localStorage) {
      if (i++ === localStorage.length) break;
      this.stickyNotes.push(JSON.parse(this.getStickyNote(parseInt(key))));
      this.id = Math.max(this.id, parseInt(key));
    }
    this.stickyNotes.sort((a, b) => b.date - a.date);
  }

  getStickyNote(id: number) {
    return localStorage.getItem(id.toString());
  }

  getAllStickyNotes() {
    return this.stickyNotes;
  }

  addStickyNote(stickyNote: StickyNote) {
    stickyNote.id = ++this.id;
    localStorage.setItem(this.id.toString(), JSON.stringify(stickyNote));
    this.stickyNotes.unshift(stickyNote);
  }
}
