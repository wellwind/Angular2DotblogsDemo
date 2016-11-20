import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-items',
    templateUrl: './todo-items.component.html',
    styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

    @Input() items: TodoItem[];

    @Output() deleteItem = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    itemClick(item: TodoItem) {
        item.done = !item.done;
    }

    delete(item: TodoItem) {
        this.deleteItem.emit(item);
    }
}
