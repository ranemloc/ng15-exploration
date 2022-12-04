import {Directive, HostBinding, Input} from '@angular/core';
import {hostInject} from "../util/host-inject.util";

@Directive({
  selector: '[appOutline]',
  standalone: true
})
export class OutlineDirective {

  static set color(color: string) {
    hostInject(OutlineDirective).color = color;
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
