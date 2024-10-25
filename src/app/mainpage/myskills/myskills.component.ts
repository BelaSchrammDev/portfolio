import { Component, inject } from '@angular/core';
import { MytranslateService } from '../../shared/services/mytranslate.service';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  translate = inject(MytranslateService);

  skillSet = [
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'API', icon: 'api.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'Firebase', icon: 'firebase.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'HTML', icon: 'html.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
    { name: 'Material Design', icon: 'material.svg' },
    { name: 'C#', icon: 'csharp.png' },
  ]
}
