import { NgModule } from '@angular/core';
import { DsButtonDirective } from './button.directive';

@NgModule({
  declarations: [DsButtonDirective],
  exports: [DsButtonDirective],
})
export class DsButtonModule {}
