import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KdsBreadcrumbsModule } from './kds-breadcrumbs';
import { KdsCardFlagsModule } from './kds-card-flags';
import { KdsCarrouselModule } from './kds-carrousel';
import { KdsDialogModule } from './kds-dialog';
import { KdsHeaderModule } from './kds-header';
import { KdsImageCropperModule } from './kds-image-cropper';
import { KdsInputModule } from './kds-input';
import { KdsLoaderModule } from './kds-loader';
import { KdsSidebarModule } from './kds-sidebar';
import { KdsSkeletonModule } from './kds-skeleton';
import { KdsStepperModule } from './kds-stepper';
import { KdsTableModule } from './kds-table';
import { KdsToastModule } from './kds-toast';
import { KdsToggleModule } from './kds-toggle';
import { KdsTooltipModule } from './kds-tooltip';

@NgModule({
  declarations: [],
  imports: [
    KdsTooltipModule,
    KdsToggleModule,
    KdsToastModule,
    KdsTableModule,
    KdsStepperModule,
    KdsSkeletonModule,
    KdsSidebarModule,
    KdsDialogModule,
    KdsLoaderModule,
    KdsInputModule,
    KdsImageCropperModule,
    KdsHeaderModule,
    KdsCarrouselModule,
    KdsCardFlagsModule,
    KdsBreadcrumbsModule,
    CommonModule,
  ],
  exports: [
    KdsTooltipModule,
    KdsToggleModule,
    KdsToastModule,
    KdsTableModule,
    KdsStepperModule,
    KdsSkeletonModule,
    KdsSidebarModule,
    KdsDialogModule,
    KdsLoaderModule,
    KdsInputModule,
    KdsImageCropperModule,
    KdsHeaderModule,
    KdsCarrouselModule,
    KdsCardFlagsModule,
    KdsBreadcrumbsModule,
  ]
})
export class ComponentsModule { }
