import { Component, inject } from '@angular/core';
import { MytranslateService } from '../../shared/services/mytranslate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  showAudioPlayer = false;
  playingAudioPlayer = false;
  translate = inject(MytranslateService);
}
