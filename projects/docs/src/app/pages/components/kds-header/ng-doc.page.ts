import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsHeaderModule, KdsHeaderComponent } from '@kds-angular';

const KdsHeaderPage: NgDocPage = {
	title: `Header`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsHeaderModule],
  playgrounds: {
    TagPlayground: {
      target: KdsHeaderComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsHeaderPage;
