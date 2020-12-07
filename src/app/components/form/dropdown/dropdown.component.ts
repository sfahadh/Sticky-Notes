import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
  
export class DropdownComponent implements OnInit {
  @Input() stickyNote;
  categories: string[] = ["white", "black", "red", "blue", "green"];
  categorySelected: string = "Select color";

  constructor() { }
  ngOnInit(): void { }
}
