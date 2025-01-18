import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { ButtonComponent, KdsButtonModule } from '@kds-angular';


const ButtonPage: NgDocPage = {
	title: `Button`,
	mdFile: './index.md',
  category: ComponentsCategory,
  imports: [KdsButtonModule],

  playgrounds: {
    TagPlayground: {
      target: ButtonComponent,
      template: `<button kdsButton>teste botão</button>`
    }
  }
};

export default ButtonPage;
