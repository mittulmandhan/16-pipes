import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public messageInput;
  // json object input
  @Input() public personInput;
  @Input() public dateInput;

  constructor() { }

  ngOnInit() {
  }

}
