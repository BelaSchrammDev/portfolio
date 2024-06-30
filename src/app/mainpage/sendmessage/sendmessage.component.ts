import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MytranslateService } from '../../shared/services/mytranslate.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sendmessage',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './sendmessage.component.html',
  styleUrl: './sendmessage.component.scss'
})
export class SendmessageComponent {
  translate = inject(MytranslateService);
  http = inject(HttpClient);

  messagedata = {
    name: '',
    email: '',
    message: '',
  };

  ppread = false;
  messagesending = false;
  messagesended = false;

  post = {
    endPoint: 'https://bela-schramm.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(messageForm: NgForm) {
    if (messageForm.submitted && messageForm.form.valid) {
      this.messagesending = true;
      this.http.post(this.post.endPoint, this.post.body(this.messagedata))
        .subscribe({
          next: (response) => {
            this.messagesending = false;
            this.messagesended = true;
            setTimeout(() => {
              this.messagesended = false;
              this.messagesending = false;
            }, 10000);
            messageForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

}
