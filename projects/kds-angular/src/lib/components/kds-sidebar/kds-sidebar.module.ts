import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsSidebarComponent } from './kds-sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KdsSidebarComponent],
  exports: [KdsSidebarComponent]
})
export class KdsSidebarModule {}
