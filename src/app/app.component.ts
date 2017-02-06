import { TodoListService } from './todo-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  today = new Date();
  bio = {
    name: 'wellwind',
    age: 30,
    sex: 'M'
  };
  constructor(private todoListService: TodoListService) {
  }
}
