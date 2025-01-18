import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsImageCropperModule, KdsImageCropperComponent } from '@kds-angular';

const KdsImageCropperPage: NgDocPage = {
	title: `Image Cropper`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsImageCropperModule],
  playgrounds: {
    TagPlayground: {
      target: KdsImageCropperComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsImageCropperPage;
