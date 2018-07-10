import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRecipehover]'
})
export class RecipeHoverDirective {
  @HostBinding('class.recipe-outline-primary') isHovering = false;

  @HostListener('mouseover') onHover() {
    this.isHovering = true;
    const el = this.el.nativeElement.querySelector('.recipe-description');
    this.renderer.removeClass(el, 'hide');
    this.renderer.addClass(el, 'show');
  }

  @HostListener('mouseout') onMouseout() {
    this.isHovering = false;
    const el = this.el.nativeElement.querySelector('.recipe-description');
    this.renderer.removeClass(el, 'show');
    this.renderer.addClass(el, 'hide');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
