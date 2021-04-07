import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconType } from '../icon/icon.component';

@Component({
  selector: 'ds-bullet-point',
  template: `
    <p class="font-semibold text-gray-400 text-left">
      <ds-icon [type]="bullet" size="large"></ds-icon>
      <span class="pl-2">
        <ng-content></ng-content>
      </span>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsBulletPointComponent {
  @Input() bullet: IconType = 'done';
}
