import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { MytranslateService } from '../../shared/services/mytranslate.service';

export interface Project {
  name: string;
  tags: string[];
  description: string;
  descriptionID: string;
  image: string;
  video?: string;
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
  translate = inject(MytranslateService);

  projectlist: Project[] = [
    {
      name: 'DABubble',
      tags: ['Angular', 'SCSS', 'TypeScript', 'Firebase'],
      description: 'A social networking app that allows users to join groups and create events.',
      descriptionID: 'desc_dabubble',
      image: 'dabubble-2.jpeg',
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/dabubble-303' },
        { name: 'Live', url: 'https://dabubble.bela-schramm.de/' }
      ],
    },
    {
      name: 'Join',
      tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description: 'A social networking app that allows users to join groups and create events.',
      descriptionID: 'desc_join',
      image: 'join.jpeg',
      video: 'join-flow.mp4',
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/DA-join' },
        { name: 'Live', url: 'https://join41.bela-schramm.de/' }
      ],
    },
    {
      name: 'Pokewiki',
      tags: ['Angular', 'SCSS', 'TypeScript', 'REST API'],
      description: 'A website that displays information about Pokemon using the PokeAPI.',
      descriptionID: 'desc_pokewiki',
      image: 'pokewiki.jpeg',
      video: 'pokewiki-flow.mp4',
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/DA_NG_pokewiki' },
        { name: 'Live', url: 'https://pokewiki.bela-schramm.de/' }
      ],
    },
    {
      name: 'El pollo loco',
      tags: ['HTML', 'CSS', 'JavaScript', 'OOP'],
      description: 'A chicken restaurant website.',
      descriptionID: 'desc_epl',
      image: 'pollo.jpeg',
      video: 'epl2-flow.mp4',
      links: [
        { name: 'GitHub', url: 'https://github.com/BelaSchrammDev/DA_ElPolloLoco' },
        { name: 'Live', url: 'https://epl.bela-schramm.de/' }
      ],
    }
  ]

}
