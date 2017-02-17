import { FormsModule } from '@angular/forms';
import { TodoListService } from './todo-list.service';
import { TodoDonePipe } from './todo-done.pipe';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoAppComponent,
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe
  ],
  providers: [TodoListService],
  exports: [
    TodoAppComponent
  ]
})
export class TodoAppModule { }
