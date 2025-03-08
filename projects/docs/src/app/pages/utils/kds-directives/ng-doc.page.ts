import { NgDocPage } from '@ng-doc/core';
import UtilsCategory from '../ng-doc.category';
import { ClickOutsideDemoComponent } from './demos.component'

const KdsDirectivesPage: NgDocPage = {
	title: `Directives`,
	mdFile: './index.md',
  category:   UtilsCategory,
  demos: { ClickOutsideDemoComponent }
};

export default KdsDirectivesPage;
