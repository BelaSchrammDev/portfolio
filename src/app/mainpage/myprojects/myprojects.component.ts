import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

export interface Project {
  name: string;
  tags: string[];
  description: string;
  image: string;
  links: ProjectLink[];
}

export interface ProjectLink {
  name: string;
  url: string;
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
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/DA-join' },
        { name: 'Live', url: 'https://join-41.developerakademie.net/index.html' }
      ],
    },
    {
      name: 'Pokewiki',
      tags: ['Angular', 'SCSS', 'TypeScript', 'REST API'],
      description: 'A website that displays information about Pokemon using the PokeAPI.',
      image: 'pokewiki.jpeg',
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/DA_NG_pokewiki' },
        { name: 'Live', url: 'http://www.pokewiki.bela-schramm.de/' }
      ],
    },
    {
      name: 'El pollo loco',
      tags: ['HTML', 'CSS', 'JavaScript', 'OOP'],
      description: 'A chicken restaurant website.',
      image: 'pollo.jpeg',
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/DA_ElPolloLoco' },
        { name: 'Live', url: 'http://www.epl.bela-schramm.de/' }
      ],
    }
  ]

}
