import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(el: ElementRef) {

    el.nativeElement.style.animation = 'blink 1s steps(5,start) infinite';
  }
}
