import { Directive, ElementRef, Output, EventEmitter, HostListener, OnInit } from '@angular/core'
import { fromEvent } from 'rxjs'
import { take } from 'rxjs/operators'

@Directive({
   selector: '[clickOutside]',
   standalone: true
})
export class ClickOutsideDirective implements OnInit {
   @Output() clickOutside = new EventEmitter()

   captured = false

   constructor(private elRef: ElementRef) {}

   @HostListener('document:click', ['$event.target'])
   onClick(target: any) {
      if (!this.captured) {
         return
      }

      if (!this.elRef.nativeElement.contains(target)) {
         this.clickOutside.emit()
      }
   }

   ngOnInit() {
    this.elRef.nativeElement.style.zIndex = '999'
      fromEvent(document, 'click', { capture: true })
         .pipe(take(1))
         .subscribe(() => {
          this.captured = true
         })
   }
}
