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
      this.stickyNotes.push(this.getStickyNote(parseInt(key)));
      this.id = Math.max(this.id, parseInt(key));
    }
    this.stickyNotes.sort((a, b) => b.date - a.date);
  }

  getStickyNote(id: number) {
    return JSON.parse(localStorage.getItem(id.toString()));
  }

  getAllStickyNotes() {
    return this.stickyNotes;
  }

  addStickyNote(stickyNote: StickyNote) {
    stickyNote.id = ++this.id;
    localStorage.setItem(this.id.toString(), JSON.stringify(stickyNote));
    this.stickyNotes.unshift(stickyNote);
  }

  deleteStickyNote(id: string) {
    this.removeStickyNoteFromArray(parseInt(id));
    localStorage.removeItem(id);
  }

  removeStickyNoteFromArray(id: number) {
    for (let i = 0; i < this.stickyNotes.length; i++) {
      if (this.stickyNotes[i].id === id) {
        this.stickyNotes.splice(i, 1);
      }
    }
  }

  editStickyNote(updatedStickyNote: StickyNote) {
    const stickyNote = this.getStickyNote(updatedStickyNote.id);
    stickyNote.title = updatedStickyNote.title;
    stickyNote.topic = updatedStickyNote.topic;
    stickyNote.description = updatedStickyNote.description;
    stickyNote.color = updatedStickyNote.color;
    stickyNote.date = Date.now();

    this.removeStickyNoteFromArray(stickyNote.id);
    this.stickyNotes.unshift(stickyNote);
  }
}
