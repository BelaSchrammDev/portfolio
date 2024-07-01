import { Component, OnInit, inject } from '@angular/core';
import { MytranslateService } from '../shared/services/mytranslate.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  translate = inject(MytranslateService);

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

}
