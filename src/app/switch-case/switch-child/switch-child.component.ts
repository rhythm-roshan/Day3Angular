import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-switch-child',
  templateUrl: './switch-child.component.html',
  styleUrls: ['./switch-child.component.css']
})
export class SwitchChildComponent implements OnInit {

  @Input('active') active: boolean;

  constructor() {
  }

  ngOnInit() {
  }


}
