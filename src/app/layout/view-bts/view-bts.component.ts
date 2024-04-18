import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bts',
  templateUrl: './view-bts.component.html',
  styleUrls: ['./view-bts.component.css']
})
export class ViewBTSComponent implements OnInit {

  @Input() btsList;
  constructor() { }

  ngOnInit() {
  }

}
