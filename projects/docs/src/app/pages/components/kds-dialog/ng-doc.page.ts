import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsDialogModule, KdsDialogComponent } from '@kds-angular';

const KdsDialogPage: NgDocPage = {
	title: `Dialog`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsDialogModule],
  playgrounds: {
    TagPlayground: {
      target: KdsDialogComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsDialogPage;
