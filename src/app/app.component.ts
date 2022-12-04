import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ExperimentComponent} from "./experiments/experiment.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <p>My fabulous Angular app</p>
    <app-experiment *ngIf="showExperiment"></app-experiment>
    <button (click)="showExperiment = !showExperiment">Toggle experiment</button>
    <router-outlet></router-outlet>
  `,
  imports: [CommonModule, RouterModule, ExperimentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,

})
export class AppComponent {
  title = 'angular-test';

  showExperiment: boolean = false;
}
