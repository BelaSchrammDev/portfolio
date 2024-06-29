import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  reloadPage() {
    location.reload();
  }
}
