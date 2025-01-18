import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsStepperModule, KdsStepperComponent } from '@kds-angular';

const KdsStepperPage: NgDocPage = {
	title: `Stepper`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsStepperModule],
  playgrounds: {
    TagPlayground: {
      target: KdsStepperComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsStepperPage;
