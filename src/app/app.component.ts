import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { SimulatorService } from './services/simulator.service';
import { MessageService } from './services/message.service';
import { RusticiDriverService } from './services/rustici-driver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('iframeSim') iframe: ElementRef;
  showSim: boolean = false;

  constructor(
    private simService: SimulatorService,
    private menssageService: MessageService,
    private scorm: RusticiDriverService
  ) {
    this.simService.ready = false;
    menssageService.getMessage().subscribe(msg => {
      switch (msg.text) {
        case 'showSim':
          if (simService.ready) {
            this.showSim = true;
          } else {
            console.log('Simulador no listo')
          }
          break;

        default:
          break;
      }
    })
  }


  ngAfterViewInit() {
    this.simService.iframe = this.iframe;
    console.log(this.iframe)
    setTimeout(() => {
      console.log('Mensaje Ganó Foco');
      this.iframe.nativeElement.focus();
    }, 1000);
  }

  @HostListener('window:message', ['$event']) onPostMessage(event) {
    const args: string = event.data.split('-');
    let msg = args[0]
    let param = args.length > 1 ? args[1] : null;
    let puntaje = 0;
    switch (msg) {
      case 'Ready':
        console.log('Mensaje Ready');
        this.simService.ready = true
        break;
      case 'FinModulo1':
        puntaje = parseInt(param);
        console.log('Mensaje Fin Módulo 1:', puntaje);
        this.simService.puntaje = puntaje;
        this.scorm.setScore(this.simService.puntaje, 0, 9);
        break;
      case 'FinModulo2':
        puntaje = parseInt(param);
        console.log('Mensaje Fin Módulo 2:', puntaje);
        this.simService.puntaje += puntaje;
        this.scorm.setScore(this.simService.puntaje, 0, 9);
        break;
      case 'FinModulo3':
        puntaje = parseInt(param);
        console.log('Mensaje Fin Módulo 3:', puntaje);
        this.simService.puntaje += puntaje;
        this.scorm.setScore(this.simService.puntaje, 0, 9);
        break;
      case 'Reset':
        this.simService.puntaje = 0;
        console.log('Mensaje Reset', this.simService.puntaje);
        break;
      case 'End':
        console.log('Mensaje End', this.simService.puntaje);
        this.scorm.setPassed();
        break;
      default:
        console.log('mensajes del simulador no manejados no manejados', event.data);
        break;
    }
  }

  onBlur(){
    console.log('Mensaje Perdió foco');
    setTimeout(() => {
      this.iframe.nativeElement.focus();
    }, 1000);
  }


}
