import { TestBed } from '@angular/core/testing';

import { StickyNotesService } from './sticky-note.service';

describe('NotesService', () => {
  let service: StickyNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickyNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
