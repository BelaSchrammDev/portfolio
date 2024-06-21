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
      name: 'Pokewiki',
      tags: ['Angular', 'SCSS', 'TypeScript', 'REST API'],
      description: 'A website that displays information about Pokemon using the PokeAPI.',
      image: 'join.jpeg',
    },
    {
      name: 'El pollo loco',
      tags: ['HTML', 'CSS', 'JavaScript', 'OOP'],
      description: 'A chicken restaurant website.',
      image: 'pollo.jpeg',
    }
  ]

}
