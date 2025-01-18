import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsSkeletonModule, KdsSkeletonComponent } from '@kds-angular';

const KdsSkeletonPage: NgDocPage = {
	title: `Skeleton`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsSkeletonModule],
  playgrounds: {
    TagPlayground: {
      target: KdsSkeletonComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsSkeletonPage;
