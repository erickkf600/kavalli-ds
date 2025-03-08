import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsButtonComponent } from '@kds-angular';

const KdsButtonPage: NgDocPage = {
	title: `Button`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  // imports: [KdsButtonModule],
  playgrounds: {
    ButtonPlayground: {
      target: KdsButtonComponent,
      template: ` <button kdsButton>teste botão</button> `
    },
    ButtonIconPlayground: {
      target: KdsButtonComponent,
      template: `
      <button kdsButton>
        teste botão com icone
        <span class="">></span>
      </button>
      `
    }
  }
};

export default KdsButtonPage;
