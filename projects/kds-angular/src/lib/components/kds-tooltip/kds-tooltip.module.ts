import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsTooltipComponent } from './kds-tooltip.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsTooltipComponent],
  exports: [KdsTooltipComponent]
})
export class KdsTooltipModule {}
