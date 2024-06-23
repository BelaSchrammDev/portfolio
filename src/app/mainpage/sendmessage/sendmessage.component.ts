import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sendmessage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sendmessage.component.html',
  styleUrl: './sendmessage.component.scss'
})
export class SendmessageComponent {

  http = inject(HttpClient);

  messagedata = {
    name: '',
    email: '',
    message: '',
  };

  ppread = false;

  mailTest = true;

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
    if (messageForm.submitted && messageForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.messagedata))
        .subscribe({
          next: (response) => {

            messageForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (messageForm.submitted && messageForm.form.valid && this.mailTest) {
      console.log('Mail send test');
      messageForm.resetForm();
    }
  }

}
