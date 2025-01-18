import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsHeaderComponent } from './kds-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsHeaderComponent],
  exports: [KdsHeaderComponent]
})
export class KdsHeaderModule {}
