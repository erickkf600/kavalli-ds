import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KdsBreadcrumbsModule } from './kds-breadcrumbs';
import { KdsButtonModule } from './kds-button';
import { KdsCardFlagsModule } from './kds-card-flags';
import { KdsCarrouselModule } from './kds-carrousel';
import { KdsDialogModule } from './kds-dialog';
import { KdsHeaderModule } from './kds-header';
import { KdsIconsModule } from './kds-icons';
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
    KdsIconsModule,
    KdsHeaderModule,
    KdsCarrouselModule,
    KdsCardFlagsModule,
    KdsButtonModule,
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
    KdsIconsModule,
    KdsHeaderModule,
    KdsCarrouselModule,
    KdsCardFlagsModule,
    KdsButtonModule,
    KdsBreadcrumbsModule,
  ]
})
export class ComponentsModule { }
