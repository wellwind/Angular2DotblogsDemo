import { TodoItem } from '../shared/todo-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone',
  pure: false
})
export class TodoDonePipe implements PipeTransform {

  transform(todoItem: TodoItem, displayNotDone: boolean): any {
    if (todoItem.done) {
      return '(已完成)';
    } else if (displayNotDone) {
      return '(未完成)';
    }
    return '';
  }

}
