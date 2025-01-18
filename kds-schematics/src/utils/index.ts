import { WorkspaceDefinition, getWorkspace } from '@schematics/angular/utility/workspace';
import { Tree } from "@angular-devkit/schematics";
import * as readline from 'readline';

export const findPublicApiFile = async (tree: Tree, project: string): Promise<string | null> => {
  const workspace: WorkspaceDefinition = await getWorkspace(tree);
  return `/${workspace.projects.get(project)?.sourceRoot}/public-api.ts`
};

export const findDocPath = async (tree: Tree, section: string): Promise<string> => {
  const workspace: WorkspaceDefinition = await getWorkspace(tree);
  return `/${workspace.projects.get('docs')?.sourceRoot}/app/pages/${section}/`
};
// export const findPublicApiFile = (tree: Tree): string | null => {
//   const visit = (path: string) => {
//     if (path.endsWith('/public-api.ts')) {
//       return path;
//     }
//     return null;
//   };


//   let publicApiPath: string | null = null;
//   tree.getDir('/')
//     .visit((filePath) => {
//       if (publicApiPath) {
//         return;
//       }
//       publicApiPath = visit(filePath);
//     });

//   return publicApiPath;
// };

export const findDirectory = (tree: Tree, componentName: string): string | null => {
  let componentDir: string | null = null;
  tree.getDir('src')
    .visit((filePath, entry) => {
      if (entry && filePath.includes(`/${componentName}/`)) {
        componentDir = filePath;
        return;
      }
    });
  return componentDir;
};

export function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}
