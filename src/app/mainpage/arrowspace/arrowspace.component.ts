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

  animationState: 'begin' | 'moveforward' | 'freeze' | 'movebackward' = 'begin';

  @Input() alignment: string = 'left';
  section: string = `section_${Math.random().toString(36).substring(2, 9)}`;

  @HostListener('mouseover', ['$event'])

  onMouseOver(event: MouseEvent) {
    if (this.animationState != 'begin') return;
    const animElement = document.getElementById(this.section) as unknown as SVGAnimateElement;
    if (animElement) {
      animElement.beginElement();
      this.animationState = 'moveforward';
      setTimeout(() => {
        this.animationState = 'freeze';
      }, 550);
    }
  }

  @HostListener('mouseleave', ['$event'])

  onMouseLeave(event: MouseEvent) {
    if (this.animationState != 'freeze') return;
    const animElement = document.getElementById(this.section + 'return') as unknown as SVGAnimateElement;
    if (animElement) {
      animElement.beginElement();
      this.animationState = 'movebackward';
      setTimeout(() => {
        this.animationState = 'begin';
      }, 550);
    }
  }
}
