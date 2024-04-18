import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rf-antenna-add',
  templateUrl: './view-rf-antenna-add.component.html',
  styleUrls: ['./view-rf-antenna-add.component.css']
})
export class ViewRfAntennaAddComponent implements OnInit {

  @Input() viewDataObj;
  constructor() { }

  ngOnInit() {
  }

}
