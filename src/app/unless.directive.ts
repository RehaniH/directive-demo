import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vref.createEmbeddedView(this.templateRef);
    } else {
      this.vref.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vref: ViewContainerRef) { 

  }

}
