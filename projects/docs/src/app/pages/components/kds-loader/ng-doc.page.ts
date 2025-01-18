import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsLoaderModule, KdsLoaderComponent } from '@kds-angular';

const KdsLoaderPage: NgDocPage = {
	title: `Loader`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsLoaderModule],
  playgrounds: {
    TagPlayground: {
      target: KdsLoaderComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsLoaderPage;
