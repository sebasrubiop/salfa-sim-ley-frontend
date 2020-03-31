import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url: string
  showSim: boolean

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.url = this.router.url
    if (this.url === '/simulador') {
      this.showSim = true
    }
  }
}
