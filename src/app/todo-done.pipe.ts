import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {

  transform(todoDone: boolean, displayNotDone: boolean): any {
    if (todoDone) {
      return '(已完成)';
    } else if (displayNotDone) {
      return '(未完成)';
    }
    return '';
  }

}
