import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[kdsIcon]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./kds-icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: {
    '[class]': 'kdsIcon',
    '[style.font-size.px]':'size',
    '[style.color]':'color',
  }
})
export class KdsIconsComponent {
  @Input() kdsIcon!: string
  @Input() size?: number = 20
  @Input() color?: string = "#fff"
}
