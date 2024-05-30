import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {

  skillSet = [
    { name: 'Angular', icon: 'angular' },
    { name: 'API', icon: 'api' },
    { name: 'CSS', icon: 'css' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Git', icon: 'git' },
    { name: 'HTML', icon: 'html' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Scrum', icon: 'scrum' },
    { name: 'Material Design', icon: 'material' },
  ]
}
