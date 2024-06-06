import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-arrowspace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrowspace.component.html',
  styleUrl: './arrowspace.component.scss'
})
export class ArrowspaceComponent {

  animationPlayed: boolean = false;

  @Input() alignment: string = 'left';
  @Input() section: string = `section_${Math.random().toString(36).substr(2, 9)}`;

  @HostListener('mouseover', ['$event'])

  onMouseOver(event: MouseEvent) {
    if (this.animationPlayed) return;
    const animElement = document.getElementById(this.section) as unknown as SVGAnimateElement;
    if (animElement) {
      animElement.beginElement();
      this.animationPlayed = true;
    }
  }

  @HostListener('mouseleave', ['$event'])

  onMouseLeave(event: MouseEvent) {
    if (!this.animationPlayed) return;
    const animElement = document.getElementById(this.section + 'return') as unknown as SVGAnimateElement;
    if (animElement) {
      animElement.beginElement();
      this.animationPlayed = false;
    }
  }
}
