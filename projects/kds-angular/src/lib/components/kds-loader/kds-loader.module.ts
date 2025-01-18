import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsLoaderComponent } from './kds-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsLoaderComponent],
  exports: [KdsLoaderComponent]
})
export class KdsLoaderModule {}
