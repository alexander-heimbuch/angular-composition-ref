import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

export type CardVariant = 'basic' | 'highlight';
export type CardType = 'basic' | 'startup' | 'enterprise';

@Component({
  selector: 'ds-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsCardComponent {
  @Input() variant?: CardVariant = 'basic';
}

