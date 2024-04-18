import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rruadd',
  templateUrl: './view-rruadd.component.html',
  styleUrls: ['./view-rruadd.component.css']
})
export class ViewRRUAddComponent implements OnInit {

  @Input() rruAddList;
  constructor() { }

  ngOnInit() {
  }

}
