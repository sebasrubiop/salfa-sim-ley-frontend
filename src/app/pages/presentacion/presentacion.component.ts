import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { MessageService } from 'src/app/services/message.service';
import { SimulatorService } from 'src/app/services/simulator.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: 'presentacion.component.html',
  styleUrls: ['presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {

  slideLength = 3
  slideIndex = this.slideLength;
  seconds = 5;
  intervalId;


  constructor(
    private router: Router,
    private menssageService: MessageService,
    private simService: SimulatorService
  ) {
  }

  ngOnInit() {
    this.runSimulator();
    this.intervalId = setInterval(() => {
      this.runSimulator();
      this.slideIndex = this.slideIndex > 1 ? this.slideIndex - 1 : this.slideLength;
    }, this.seconds * 1000);
  }
  private runSimulator() {
    if (this.simService.ready) {
      this.simService.sendMessage(`Set${this.simService.getAvatar()}`);
      this.simService.sendMessage('Start');
      this.menssageService.sendMessage('showSim');
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  go() {
    this.simService.ready = true;
    this.runSimulator();
  }

}
