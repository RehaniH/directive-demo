import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyFocus]'
})
export class MyFocusDirective implements OnInit{

  @Input() customDefaultColor: string = 'transparent';
  @Input() customHighlightColor: string = 'pink';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseenter') mouseover(eventData: Event): void{
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.customHighlightColor);
  }
  @HostListener('mouseleave') mouseleave(): void{
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.customDefaultColor);
  }

}
