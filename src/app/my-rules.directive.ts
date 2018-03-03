import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Cadastro } from './Cadastro';


@Directive({
  selector: '[appMyRules]'
})
export class MyRulesDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML += '';
  }
}
