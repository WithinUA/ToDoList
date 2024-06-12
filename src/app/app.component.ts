import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ToDoList';
  firstName: string = `Valentin`;
  lastName: string = `Verhovsky`;
  age: number = 36;
  selfInfo: string = "I tried coding in middle age and I liked it very much. I hope it's not too late to start now.";
  

  get FullName(): string {
     return  `${this.firstName} ${this.lastName}`
    }
}
