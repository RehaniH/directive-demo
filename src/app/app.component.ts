import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddSelected = false;
  evenArray = [2, 4, 6, 8, 10];
  oddArray = [1, 3, 5, 7, 9];
  myValue = 12;
}
