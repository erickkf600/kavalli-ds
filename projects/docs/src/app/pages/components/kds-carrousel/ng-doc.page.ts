import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsCarrouselModule, KdsCarrouselComponent } from '@kds-angular';

const KdsCarrouselPage: NgDocPage = {
	title: `Carrousel`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsCarrouselModule],
  playgrounds: {
    TagPlayground: {
      target: KdsCarrouselComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsCarrouselPage;
