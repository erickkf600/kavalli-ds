import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ClickOutsideDirective, KdsButtonComponent } from "@kds-angular";

@Component({
  selector: 'ng-doc-demo-click-outside',
  standalone: true,
  imports: [ClickOutsideDirective, KdsButtonComponent, CommonModule],
  styles: `
    .example-1 { width: 100px; height: 100px; background: #ccc; position: absolute; top: 0; left: 0 }
  `,
  template: `
  <div style="position: relative">
    <button kdsButton (click)="show = !show">toggle</button>
    <!-- snippet -->
<div (clickOutside)="show = false" class="example-1" *ngIf="show">
  Content...
</div>
    <!-- snippet -->
  </div>

  `,
})
export class ClickOutsideDemoComponent { show = false }
