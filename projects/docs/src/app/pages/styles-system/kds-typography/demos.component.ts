import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-doc-font-size',
  standalone: true,
  imports: [CommonModule],
  template: `<p [class]="'kds-text-'+size">Font Size</p>`,
  styles: "::ng-deep.ng-doc-demo-controls {display: none !important}"
})

export class FontSizeDemoComponent {
  @Input() size: 'base' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' = 'base'
}
