import { Component, inject } from '@angular/core';
import { MytranslateService } from '../../shared/services/mytranslate.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  translate = inject(MytranslateService);
}
