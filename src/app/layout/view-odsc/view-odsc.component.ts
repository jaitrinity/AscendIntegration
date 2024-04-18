import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-odsc',
  templateUrl: './view-odsc.component.html',
  styleUrls: ['./view-odsc.component.css']
})
export class ViewOdscComponent implements OnInit {

  @Input() viewDataObj;
  constructor() { }

  ngOnInit() {
  }

}
