import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutlineDirective} from "../styler/outline.directive";
import {interval} from "rxjs";
import {AutoUnsubscribeDirective} from "../util/auto-unsubscribe.directive";

@Component({
  selector: 'app-experiment',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [OutlineDirective, AutoUnsubscribeDirective],
  template: `<p>Experiment component (open console)</p>`,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperimentComponent {

  constructor() {
    OutlineDirective.color = 'red';
    AutoUnsubscribeDirective.subscribe(interval(1000), console.log);
  }

}
