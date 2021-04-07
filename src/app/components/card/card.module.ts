import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsCardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DsCardComponent],
  exports: [DsCardComponent],
})
export class DsCardModule {}
