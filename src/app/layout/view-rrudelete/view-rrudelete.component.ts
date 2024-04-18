import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rrudelete',
  templateUrl: './view-rrudelete.component.html',
  styleUrls: ['./view-rrudelete.component.css']
})
export class ViewRRUDeleteComponent implements OnInit {

  @Input() rruDeleteList;
  constructor() { }

  ngOnInit() {
  }

}
