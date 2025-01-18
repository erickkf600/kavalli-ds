import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsTableModule, KdsTableComponent } from '@kds-angular';

const KdsTablePage: NgDocPage = {
	title: `Table`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsTableModule],
  playgrounds: {
    TagPlayground: {
      target: KdsTableComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsTablePage;
