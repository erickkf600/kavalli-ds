import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsSidebarModule, KdsSidebarComponent } from '@kds-angular';

const KdsSidebarPage: NgDocPage = {
	title: `Sidebar`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsSidebarModule],
  playgrounds: {
    TagPlayground: {
      target: KdsSidebarComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsSidebarPage;
