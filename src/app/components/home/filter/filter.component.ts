import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
  
export class FilterComponent implements OnInit {
  @Input() stickyNotes: StickyNote[];
  colorSelected: string;
  topicSelected: string;
  colors: string[] = ["blue", "gray", "green", "red", "yellow", "turquoise", "black", "white"];

  constructor() { }
  ngOnInit(): void { }

}
