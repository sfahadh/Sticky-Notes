import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteListComponent } from './sticky-note-list.component';

describe('StickyNoteListComponent', () => {
  let component: StickyNoteListComponent;
  let fixture: ComponentFixture<StickyNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
