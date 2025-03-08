import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[kdsButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./kds-button.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.kds-button]':'true',
    '[class.kds-button--basic]':'variant === "basic"',
    '[class.kds-button--stroked]':'variant === "stroked"',
    '[class.kds-button--neutral]':'variant === "neutral"',
    '[class.kds-button--secondary]':'variant === "secondary"',
    '[class.kds-button--outline]':'outline',
    '[class.kds-button--size]':'size',
    '[class.kds-button--loading]':'loading',
    '[style.border-radius.px]':'radius',
  }
})
export class KdsButtonComponent {
  @Input() variant?: 'primary' | 'basic' | 'stroked' | 'neutral' | 'secondary' = 'primary'
  @Input() outline?: boolean
  @Input() size?: "S" | "M" | "L" = "M"
  @Input() radius? = '4';
  @Input() loading? = false;

  constructor(public elementRef: ElementRef<HTMLButtonElement>){}
}
