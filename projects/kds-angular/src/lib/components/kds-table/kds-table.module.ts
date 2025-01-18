import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsTableComponent } from './kds-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsTableComponent],
  exports: [KdsTableComponent]
})
export class KdsTableModule {}
