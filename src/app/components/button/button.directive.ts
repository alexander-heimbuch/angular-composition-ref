import { Directive, HostBinding, Input } from "@angular/core";

export type ButtonType = "primary" | "warning";

@Directive({
  selector: '[ds-button]'
})
export class DsButtonDirective {
  @Input('ds-button') buttonType: ButtonType = "primary";

  @HostBinding('class.py-4') padding = true;
  @HostBinding('class') get className() {
    const classes = ['py-4', 'w-full', 'rounded-xl']

    switch (this.buttonType) {
      case 'primary':
        classes.push('bg-blue-600', 'hover:bg-blue-400', 'text-white')
        break;
      case 'warning':
        classes.push('bg-yellow-400', 'hover:bg-yellow-200', 'text-gray-800')
        break;
    }

    return classes.join(' ');
  }
}
