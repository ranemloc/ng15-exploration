import {Route} from "@angular/router";
import {TodoListComponent} from "./todo-list.component";
import {TodoItemComponent} from "./todo-item.component";

export const todoRoutes: Route[] = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'item',
    component: TodoItemComponent
  }
]
