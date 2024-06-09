import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

export interface Project {
  name: string;
  tags: string[];
  description: string;
  image: string;
}

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {

  projectlist: Project[] = [
    {
      name: 'Join',
      tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description: 'A social networking app that allows users to join groups and create events.',
      image: 'join.jpeg',
    },
    {
      name: 'El pollo loco',
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: 'A chicken restaurant website.',
      image: 'pollo.jpeg',
    }
  ]

}
