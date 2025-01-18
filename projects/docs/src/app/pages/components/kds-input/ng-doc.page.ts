import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsInputModule, KdsInputComponent } from '@kds-angular';

const KdsInputPage: NgDocPage = {
	title: `Input`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsInputModule],
  playgrounds: {
    TagPlayground: {
      target: KdsInputComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsInputPage;
