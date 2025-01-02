import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollTop = (event.target as Document).documentElement.scrollTop;
    console.log(`Scroll position: ${scrollTop}`);
    // Add logic for scrolling effects here
  }
}
