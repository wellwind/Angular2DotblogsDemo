import { HostListener, Renderer, ElementRef, Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  @Input() appBsButton;
  @Input() mouseDownClass; // 額外的@Input

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.appBsButton = this.appBsButton || 'primary';
    this.mouseDownClass = this.mouseDownClass || 'danger';
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }

  @HostListener('mousedown') onMouseDown() {
    // 移除原來的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, false);
    // 加入mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, true);
  }

  @HostListener('mouseup') onMouseUp() {
    // 移除mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, false);
    // 加入原來的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }
}
