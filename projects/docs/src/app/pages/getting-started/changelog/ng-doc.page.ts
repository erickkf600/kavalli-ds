import { NgDocPage } from '@ng-doc/core';
import FunctionsCategory from '../ng-doc.category';
import GettingStartedCategory from '../ng-doc.category';


const ChangelogPage: NgDocPage = {
	title: `Changelog`,
	mdFile: './index.md',
  category:   GettingStartedCategory,
  order: 2,
};

export default ChangelogPage;
