import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '\t#F5F5F5';
  }
}
