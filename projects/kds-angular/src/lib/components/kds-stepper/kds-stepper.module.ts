import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsStepperComponent } from './kds-stepper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsStepperComponent],
  exports: [KdsStepperComponent]
})
export class KdsStepperModule {}
