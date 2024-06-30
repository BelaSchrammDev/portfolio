import { Component, inject } from '@angular/core';
import { MytranslateService } from '../../shared/services/mytranslate.service';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  translate = inject(MytranslateService);

}
