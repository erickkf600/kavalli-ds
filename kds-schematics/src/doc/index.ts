import { strings } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree, apply, applyTemplates, chain, mergeWith, move, url } from '@angular-devkit/schematics';
import { Schema } from '@schematics/angular/component/schema';
import { askQuestion, findDocPath } from '../utils';

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
    return chain([
      () => {
        return async (_tree: Tree, _context: SchematicContext): Promise<Rule> => {
          const answer = await askQuestion('Do you want to create a doc? (yes/no): ');

          if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            _context.logger.info('Creating documentation...');
            return updateDocsRule(options)(_tree, _context)
          } else {
            _context.logger.info('Doc creation skipped.');
            return () => {};
          }
        };
      },
    ]);
  };
}
