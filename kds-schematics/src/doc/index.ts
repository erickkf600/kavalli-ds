import { strings } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree, apply, applyTemplates, mergeWith, move, url } from '@angular-devkit/schematics';
import { Schema } from '@schematics/angular/component/schema';
import { findDocPath } from '../utils';

interface NewScheme extends Schema {
  libSection?: any
  defaultSchematic?: boolean
  path?: any
  project: any
}

const updateDocsRule = (options: NewScheme) => {
  return async (tree: Tree, _context: SchematicContext) => {
    const docPath = await findDocPath(tree, options.libSection)

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings,
      }),
      move(docPath)
    ]);
    return mergeWith(templateSource);
  };
};

export function documentation(options: NewScheme): Rule {
  return async (_tree: Tree, _context: SchematicContext) => {
    return updateDocsRule(options)(_tree, _context)
  };
}
