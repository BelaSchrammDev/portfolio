import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private _burgermenushow: boolean = false;

  get burgermenushow(): boolean {
    return this._burgermenushow;
  }

  set burgermenushow(value: boolean) {
    this._burgermenushow = value;
    let animID = 'burgermenu';
    if (!value) animID += '-back';
    const animElement = document.getElementById(animID) as unknown as SVGAnimateElement;
    if (animElement) {
      animElement.beginElement();
    }
  }
}
