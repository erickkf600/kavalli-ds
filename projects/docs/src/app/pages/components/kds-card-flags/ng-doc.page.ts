import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsCardFlagsModule, KdsCardFlagsComponent } from '@kds-angular';

const KdsCardFlagsPage: NgDocPage = {
	title: `Card Flags`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsCardFlagsModule],
  playgrounds: {
    TagPlayground: {
      target: KdsCardFlagsComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsCardFlagsPage;
