import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-arrowspace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrowspace.component.html',
  styleUrl: './arrowspace.component.scss'
})
export class ArrowspaceComponent implements OnInit {

  @Input() alignment: string = 'left';
  private viewstate: 'hidden' | 'show' = 'hidden';
  elementID: string = 'arrow_' + Math.floor(Math.random() * 1000);
  section: string = 'section_' + Math.floor(Math.random() * 1000);

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.id = this.elementID;
  }

  @HostListener('window:scroll', ['$event'])
  checkIsViewed(event: any) {
    if (this.isElementInViewport() && this.viewstate === 'hidden') {
      this.viewstate = 'show';
      this.playSVGAnimation(this.section);
    } else if (!this.isElementInViewport() && this.viewstate === 'show') {
      this.viewstate = 'hidden';
      this.playSVGAnimation(this.section + 'return');
    }
  }

  private playSVGAnimation(id: string) {
    const animElement = document.getElementById(id) as unknown as SVGAnimateElement;
    if (animElement) {
      animElement.beginElement();
    }
  }

  private isElementInViewport() {
    const rect = this.element.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top >= 0 &&
      rect.bottom <= viewportHeight
    );
  }
}
