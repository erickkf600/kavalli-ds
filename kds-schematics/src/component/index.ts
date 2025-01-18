import { Rule, chain, externalSchematic } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';
import { Schema } from '@schematics/angular/component/schema';

export function component(options: Schema): Rule {

  //  const modulePath = (await findModuleFromOptions(host, options))!;
  //     addModuleImportToModule(host, modulePath, 'MatGridListModule', '@angular/material/grid-list');
  //     addModuleImportToModule(host, modulePath, 'MatCardModule', '@angular/material/card');
  //     addModuleImportToModule(host, modulePath, 'MatMenuModule', '@angular/material/menu');
  //     addModuleImportToModule(host, modulePath, 'MatIconModule', '@angular/material/icon');
  //     addModuleImportToModule(host, modulePath, 'MatButtonModule', '@angular/material/button');
  return chain([
      externalSchematic('@schematics/angular', 'component', {
        ...options,
        style: 'scss',
        skipImport: false,
      }),
      buildComponent({ ...options })
    ]);

}
