import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MytranslateService } from '../shared/services/mytranslate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate = inject(MytranslateService);

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const targetID = (event.target as Element).id;
    const isALink = (event.target as Element).parentElement?.tagName === 'A';
    if (this.burgermenushow && targetID != 'burgermenusvg') {
      if (!isALink) event.preventDefault();
      this.burgermenushow = false;
    }
  }

  private _burgermenushow: boolean = false;

  get burgermenushow(): boolean {
    return this._burgermenushow;
  }

  set burgermenushow(value: boolean) {
    if (value === this._burgermenushow) return;
    this._burgermenushow = value;
    let animID = 'burgermenu';
    if (!value) animID += '-back';
    const animElement = document.getElementById(animID) as unknown as SVGAnimateElement;
    if (animElement) animElement.beginElement();
  }
}
