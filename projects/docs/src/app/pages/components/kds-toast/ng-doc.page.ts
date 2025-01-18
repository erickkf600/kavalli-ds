import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsToastModule, KdsToastComponent } from '@kds-angular';

const KdsToastPage: NgDocPage = {
	title: `Toast`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsToastModule],
  playgrounds: {
    TagPlayground: {
      target: KdsToastComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsToastPage;
