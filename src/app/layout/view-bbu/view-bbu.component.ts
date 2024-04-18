import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bbu',
  templateUrl: './view-bbu.component.html',
  styleUrls: ['./view-bbu.component.css']
})
export class ViewBBUComponent implements OnInit {

  @Input() bbuList;
  constructor() { }

  ngOnInit() {
  }

}
