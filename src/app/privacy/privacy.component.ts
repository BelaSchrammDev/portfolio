import { Component } from '@angular/core';
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
export class PrivacyComponent {

}
