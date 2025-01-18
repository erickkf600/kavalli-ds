import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsInputComponent } from './kds-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsInputComponent],
  exports: [KdsInputComponent]
})
export class KdsInputModule {}
