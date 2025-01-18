import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsSkeletonComponent } from './kds-skeleton.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsSkeletonComponent],
  exports: [KdsSkeletonComponent]
})
export class KdsSkeletonModule {}
