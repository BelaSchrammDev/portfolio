import { Component, Input } from '@angular/core';
import { Project, ProjectLink } from '../myprojects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: Project | undefined;
  @Input() otherDirection: boolean = false;
  @Input() index: number = 0;
  @Input() total: number = 10;

  onLinkClick(link: ProjectLink) {
    console.log('Opening link:', link.url);
    window.open(link.url, '_blank');
  }
}
