import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsToggleComponent } from './kds-toggle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsToggleComponent],
  exports: [KdsToggleComponent]
})
export class KdsToggleModule {}
