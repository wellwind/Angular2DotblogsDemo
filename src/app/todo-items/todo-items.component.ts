import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

  itemClick(item: TodoItem) {
    item.done = !item.done;
  }
}
