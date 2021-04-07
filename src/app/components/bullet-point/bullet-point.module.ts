import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsIconModule } from '../icon/icon.module';

import { DsBulletPointComponent } from './bullet-point.component';

@NgModule({
  imports: [CommonModule, DsIconModule],
  declarations: [DsBulletPointComponent],
  exports: [DsBulletPointComponent],
})
export class DsBulletPointModule {}
