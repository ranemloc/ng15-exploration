import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from "./todo-item.component";
import {todoList} from "./todo-list.data";
import {OutlineDirective} from "../styler/outline.directive";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent,
    OutlineDirective
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3 appOutline>The todo list</h3>
    <ul>
      <li *ngFor="let item of todoList">
        <app-todo-item [item]="item"></app-todo-item>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  readonly todoList = todoList;
}
