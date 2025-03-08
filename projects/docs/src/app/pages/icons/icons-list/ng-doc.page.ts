import { KdsIconsListComponent } from '@component/kds-icons-list/kds-icons-list.component';
import { KdsIconsComponent } from '@kds-angular';
import { NgDocPage } from '@ng-doc/core';
import IconsCategory from '../ng-doc.category';


const IconsListPage: NgDocPage = {
	title: `Icon List`,
	mdFile: './index.md',
  category:   IconsCategory,
  order: 1,
  demos: {KdsIconsListComponent},
  playgrounds: {
    IconPlayground: {
      target: KdsIconsComponent,
      template: ` <span kdsIcon="icon-airplay"></span>`
    }
  }
};

export default IconsListPage;
