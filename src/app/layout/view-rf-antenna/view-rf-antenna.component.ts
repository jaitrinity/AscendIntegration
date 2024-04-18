import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rf-antenna',
  templateUrl: './view-rf-antenna.component.html',
  styleUrls: ['./view-rf-antenna.component.css']
})
export class ViewRfAntennaComponent implements OnInit {

  @Input() rfAntennaList;
  constructor() { }

  ngOnInit() {
  }

}
