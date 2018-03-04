import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
   @Input()
  color = 'danger';

  constructor() { }

  ngOnInit() {
  }

}
