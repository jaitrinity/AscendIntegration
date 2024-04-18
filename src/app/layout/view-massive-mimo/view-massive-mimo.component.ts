import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-massive-mimo',
  templateUrl: './view-massive-mimo.component.html',
  styleUrls: ['./view-massive-mimo.component.css']
})
export class ViewMassiveMimoComponent implements OnInit {

  @Input() massiveMimoList;
  constructor() { }

  ngOnInit() {
  }

}
