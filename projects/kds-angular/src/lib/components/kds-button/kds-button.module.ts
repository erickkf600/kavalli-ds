import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsButtonComponent } from './kds-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsButtonComponent],
  exports: [KdsButtonComponent]
})
export class KdsButtonModule {}
