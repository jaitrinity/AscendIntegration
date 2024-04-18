import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rruu',
  templateUrl: './view-rruu.component.html',
  styleUrls: ['./view-rruu.component.css']
})
export class ViewRRUUComponent implements OnInit {

  @Input() rruList;
  constructor() { }

  ngOnInit() {
  }

}
