import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MytranslateService } from '../shared/services/mytranslate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(MytranslateService);
  router = inject(Router);

  scrollToTop() {
    this.router.navigate(['/']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  reloadPage() {
    location.reload();
  }
}
