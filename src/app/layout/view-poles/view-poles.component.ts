import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-poles',
  templateUrl: './view-poles.component.html',
  styleUrls: ['./view-poles.component.css']
})
export class ViewPolesComponent implements OnInit {

  @Input() poleList;
  constructor() { }

  ngOnInit() {
  }

}
