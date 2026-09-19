import { Component, inject, OnInit } from '@angular/core';
import { PrivacydeComponent } from './privacyde/privacyde.component';
import { PrivacyenComponent } from './privacyen/privacyen.component';
import { MytranslateService } from '../shared/services/mytranslate.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    PrivacydeComponent,
    PrivacyenComponent
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit {
  translate = inject(MytranslateService)

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

}
