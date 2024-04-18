import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rf-antenna-delete',
  templateUrl: './view-rf-antenna-delete.component.html',
  styleUrls: ['./view-rf-antenna-delete.component.css']
})
export class ViewRfAntennaDeleteComponent implements OnInit {

  @Input() viewDataObj;
  constructor() { }

  ngOnInit() {
  }

}
