import { ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    const button = (this.el.nativeElement as HTMLElement);
    button.classList.add('btn');
    button.classList.add('btn-primary');
  }
}
