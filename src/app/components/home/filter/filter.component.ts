import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
  
export class FilterComponent implements OnInit {
  colorSelected: string;
  colors: string[] = ["blue", "gray", "green", "red", "yellow", "turquoise", "black", "white"];

  constructor() { }
  ngOnInit(): void { }

}
