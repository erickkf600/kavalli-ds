import { Rule, SchematicContext, SchematicsException, Tree, apply, applyTemplates, chain, externalSchematic, mergeWith, move, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from '@schematics/angular/component/schema';
import { askQuestion, findDocPath, findPublicApiFile } from '../utils';

interface NewScheme extends Schema {
  libSection?: any
  defaultSchematic?: boolean
  path?: any
  project: any
}

const updatePublicApiRule = (options: NewScheme) => {
  return async (tree: Tree, _context: SchematicContext) => {
    const publicApiPath = await findPublicApiFile(tree, options.project)

    if (publicApiPath && tree.exists(publicApiPath)) {
      const content = tree.read(publicApiPath);
      if (content) {
        const exportStatement = `export * from './lib/${options.libSection}/${strings.dasherize(options.name)}/index';\n`;
        const recorder = tree.beginUpdate(publicApiPath);
        recorder.insertRight(content.length, exportStatement);
        tree.commitUpdate(recorder);
        _context.logger.info(`public-api.ts updated for ${options.libSection}/${options.name}`);
      }
    } else {
      throw new SchematicsException('public-api.ts not found');
    }
    return tree;
  };
};

const updateDocsRule = (options: NewScheme) => {
  return async (tree: Tree, _context: SchematicContext) => {
    const docPath = await findDocPath(tree, options.libSection)

    const templateSource = apply(url('./doc'), [
      applyTemplates({
        ...options,
        ...strings,
      }),
      move(docPath)
    ]);
    return mergeWith(templateSource);
  };
};

export function module(options: NewScheme): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    if (options.defaultSchematic) {
      externalSchematic('@schematics/angular', 'module', options)
    }
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings,
      }),
    ]);

    return chain([
      mergeWith(templateSource),
      async (_tree: Tree, _context: SchematicContext) => {
        const answer = await askQuestion('Do you want to add export of this module on public-api? (yes/no): ');

        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
          await updatePublicApiRule(options)(_tree, _context)
        }else{
           _context.logger.info('Public API update skipped.');
        }
      },
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
      }
    ]);
  };
}
