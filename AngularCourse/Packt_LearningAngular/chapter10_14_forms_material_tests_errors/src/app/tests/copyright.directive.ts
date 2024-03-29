import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]',
})
export class CopyrightDirective {
  constructor(element: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = element.nativeElement;
    targetEl.classList.add('copyright');
    targetEl.textContent = `Copyright @ ${currentYear} All Rights Reserved.`;
  }
}
