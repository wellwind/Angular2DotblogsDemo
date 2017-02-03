import { TodoListService } from './todo-list.service';
import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private todoListService: TodoListService) {
  }

  getTodoList() {
    return this.todoListService.getTodoList;
  }

  addTodo(text) {

  }

  deleteItem(item: TodoItem) {

  }

}
