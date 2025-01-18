import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsCarrouselComponent } from './kds-carrousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsCarrouselComponent],
  exports: [KdsCarrouselComponent]
})
export class KdsCarrouselModule {}
