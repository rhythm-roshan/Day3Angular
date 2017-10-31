import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-desc-bar',
  templateUrl: './desc-bar.component.html',
  styleUrls: ['./desc-bar.component.css']
})
export class DescBarComponent implements OnInit {

  @Input('menu') item;
  constructor() { }

  ngOnInit() {
  }

  updateText(name:string)
  {
    this.item.desc = name;
  }

}
