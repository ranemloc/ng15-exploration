import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <p>My fabulous Angular app</p>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,

})
export class AppComponent {
  title = 'angular-test';
}
