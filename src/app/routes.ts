import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    loadChildren: () => import('./todo-list/todo.routes').then(esm => esm.todoRoutes),
  },
  {
    path: '**',
    redirectTo: 'todos'
  }
];
