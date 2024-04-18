import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-microwave',
  templateUrl: './view-microwave.component.html',
  styleUrls: ['./view-microwave.component.css']
})
export class ViewMicrowaveComponent implements OnInit {

  @Input() microwaveList;
  constructor() { }

  ngOnInit() {
  }

}
