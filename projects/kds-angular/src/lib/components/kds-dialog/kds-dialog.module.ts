import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsDialogComponent } from './kds-dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsDialogComponent],
  exports: [KdsDialogComponent]
})
export class KdsDialogModule {}
