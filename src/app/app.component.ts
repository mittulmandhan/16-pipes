import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  public message = 'Yaaaayy! you are inside pipes project';
  // property storing the current date and time
  public d = new Date();
  // json object
  public person = {
    firstName: 'Mittul',
    lastName: 'Mandhan'
  };
}
