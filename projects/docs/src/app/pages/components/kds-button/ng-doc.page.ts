import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsButtonModule, KdsButtonComponent } from '@kds-angular';

const KdsButtonPage: NgDocPage = {
	title: `Button`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsButtonModule],
  playgrounds: {
    TagPlayground: {
      target: KdsButtonComponent,
      template: `<button kdsButton>teste botão</button>`
    }
  }
};

export default KdsButtonPage;
