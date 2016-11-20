import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() addTodoItem = new EventEmitter();

  placeholderText = '請輸入代辦事項';
  todoText = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.addTodoItem.emit(this.todoText);
  }
}
