import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

export type IconSize = 'small' | 'medium' | 'large';
export type IconType = null | 'east' | 'done';

@Component({
  selector: 'ds-icon',
  template: `
    <span class="material-icons align-middle" *ngIf="type" [ngClass]="{ 'text-sm': size === 'small', 'text-base': size === 'medium', 'text-2xl': size === 'large' }">{{ type }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsIconComponent {
  @Input() size?: IconSize = 'small';
  @Input() type: IconType = null;
}

