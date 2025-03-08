import { NgDocPage } from '@ng-doc/core';
import StylesSystemCategory from '../ng-doc.category';
import { FontSizeDemoComponent } from './demos.component';


const KdsFontsPage: NgDocPage = {
	title: `Tipografia`,
	mdFile: './index.md',
  category:   StylesSystemCategory,

  playgrounds: {
    fontSize: {
      target: FontSizeDemoComponent,
      template: `<app-doc-font-size></app-doc-font-size>`,
      // controls: {
      //   size: 'string'
      //   // size: { type: 'Size', options: ['small', 'medium', 'large'] },
      // },
    }
  }
};

export default KdsFontsPage;
