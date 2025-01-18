import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { KdsTooltipModule, KdsTooltipComponent } from '@kds-angular';

const KdsTooltipPage: NgDocPage = {
	title: `Tooltip`,
	mdFile: './index.md',
  category:   ComponentsCategory,

  // Playground Implement
  imports: [KdsTooltipModule],
  playgrounds: {
    TagPlayground: {
      target: KdsTooltipComponent,
      template: `<ng-doc-selector>example</ng-doc-selector>`
    }
  }
};

export default KdsTooltipPage;
