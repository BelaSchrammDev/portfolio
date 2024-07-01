import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

}
