import {Renderer, ElementRef,  Directive,  OnInit} from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, 'btn-primary', true);
  }
}
