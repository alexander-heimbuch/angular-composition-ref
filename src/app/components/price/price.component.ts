import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// https://indepth.dev/posts/1315/angular-cdk-coercion
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ds-price',
  template: `
    <p slot="header" class="pt-2 tracking-wide">
      <span class="text-gray-400 align-top">{{ unit }} </span>
      <span class="text-3xl font-semibold">{{ amount }}</span>
      <span class="text-gray-400 font-medium">/ {{ subject }}</span>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsPriceComponent {
  private _amount: number = 0;

  @Input()
  get amount(): number {
    return this._amount;
  }
  set amount(val: number) {
    this._amount = coerceNumberProperty(val);
  }

  @Input() unit: string = '$';
  @Input() subject: string = '';

}
