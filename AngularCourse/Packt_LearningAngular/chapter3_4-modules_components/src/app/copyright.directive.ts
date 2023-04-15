import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]',
})
export class CopyrightDirective {
  constructor(element: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetElement: HTMLElement = element.nativeElement;
    targetElement.classList.add('copyright');
    targetElement.textContent = `Copyright © ${currentYear} All Rights Reserved.`;
  }
}
