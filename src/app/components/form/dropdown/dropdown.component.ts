import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
  
export class DropdownComponent implements OnInit {
  @Input() stickyNote;
  @Input() submitted;
  
  colors: string[] = ["blue", "gray", "green", "red", "yellow", "turquoise", "black", "white"];

  constructor() { }
  ngOnInit(): void { }
}
