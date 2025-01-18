import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsImageCropperComponent } from './kds-image-cropper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsImageCropperComponent],
  exports: [KdsImageCropperComponent]
})
export class KdsImageCropperModule {}
