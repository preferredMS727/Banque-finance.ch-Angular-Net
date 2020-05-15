import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickElsewhere]'
})
export class ClickOutsideDirective {
  @Output() clickElsewhere = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {
    console.log('constructor')
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    // Check if the click was outside the element
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {

      this.clickElsewhere.emit(event);
    }
  }
}
