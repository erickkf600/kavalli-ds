import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsToastComponent } from './kds-toast.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsToastComponent],
  exports: [KdsToastComponent]
})
export class KdsToastModule {}
