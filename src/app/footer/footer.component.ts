import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MytranslateService } from '../shared/services/mytranslate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(MytranslateService);

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  reloadPage() {
    location.reload();
  }
}
