import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrowspace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrowspace.component.html',
  styleUrl: './arrowspace.component.scss'
})
export class ArrowspaceComponent {
  @Input() alignment: string = 'left';
}
