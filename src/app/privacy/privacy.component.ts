import { Component, OnInit } from '@angular/core';
import { PrivacydeComponent } from './privacyde/privacyde.component';
import { PrivacyenComponent } from './privacyen/privacyen.component';

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

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

}
