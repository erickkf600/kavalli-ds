import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsToggleModule, KdsToggleComponent } from '@kds-angular';

const KdsTogglePage: NgDocPage = {
	title: `Toggle`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsToggleModule],
  playgrounds: {
    TagPlayground: {
      target: KdsToggleComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsTogglePage;
