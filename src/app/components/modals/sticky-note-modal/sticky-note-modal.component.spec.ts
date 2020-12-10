import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteModalComponent } from './sticky-note-modal.component';

describe('StickyNoteModalComponent', () => {
  let component: StickyNoteModalComponent;
  let fixture: ComponentFixture<StickyNoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
