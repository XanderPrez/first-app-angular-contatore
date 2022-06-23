import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = 'Counter';
  count = 0;

  counter() {
    this.count++;
  }
  
  counterX() {
    this.count+=10;
  }

  decounterX() {
    this.count-=10;
  }

  decounter() {
    this.count--;
  }
}
