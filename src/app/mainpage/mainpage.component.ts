import { Component } from '@angular/core';
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { ArrowspaceComponent } from "./arrowspace/arrowspace.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { MyprojectsComponent } from "./myprojects/myprojects.component";
import { SendmessageComponent } from './sendmessage/sendmessage.component';

@Component({
    selector: 'app-mainpage',
    standalone: true,
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.scss',
    imports: [
        LandingpageComponent,
        AboutmeComponent,
        ArrowspaceComponent,
        MyskillsComponent,
        MyprojectsComponent,
        SendmessageComponent
    ]
})
export class MainpageComponent {

}
