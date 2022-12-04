import {Directive, HostBinding, inject, Input} from '@angular/core';

@Directive({
  selector: '[appOutline]',
  standalone: true
})
export class OutlineDirective {

  static set color(color: string) {
    inject(OutlineDirective).color = color;
  }
  @Input()
  set color(color: string) {
    this.outline = this.getOutlineStyle(color)
  };

  @HostBinding('style.display')
  display = 'block';

  @HostBinding('style.outline')
  outline = this.getOutlineStyle('blue');

  private getOutlineStyle(color: string) {
    return `solid 1px ${color}`;
  }

}
