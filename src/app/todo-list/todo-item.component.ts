import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItem} from "./todo-item.definition";
import {OutlineDirective} from "../styler/outline.directive";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [{
    directive: OutlineDirective,
    inputs: ['color : outline']
  }],
  template: `
    <h4>{{item.title}}</h4>
    <p>{{item.description}}</p>
    <p *ngIf="item.deadline">Deadline: {{item.deadline | date}}</p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input()
  item!: TodoItem

  constructor(private readonly outline: OutlineDirective) {
    this.outline.color = 'green';
  }

}
