import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() action: EventEmitter<any> = new EventEmitter()
  @Input() instruccionCount: number
  url: string
  continuar: boolean
  comenzar: boolean
  volver: boolean

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.url = this.router.url
  }

  onHover(btn: string) {
    if (btn === 'continuar') {
      this.continuar = !this.continuar
      this.comenzar = false
    }
    if (btn === 'comenzar') {
      this.comenzar = !this.comenzar
      this.continuar = false
    }
    if (btn === 'volver') {
      console.log(this.volver)
      this.volver = !this.volver
    }
  }

  goTo() {
    if (this.url === '/home') {
      this.router.navigate(['/personajes'])
    }
    if (this.url === '/personajes') {
      this.router.navigate(['/instrucciones'])
    } if (this.url === '/instrucciones') {
      if (this.instruccionCount === 3) {
        this.router.navigate(['/presentacion'])
      } else {
        this.action.emit('next')
      }

    }
  }
  back() {
    if (this.url === '/personajes') {
      this.router.navigate(['/home'])
    } if (this.url === '/instrucciones') {
      if (this.instruccionCount === 1) {
        this.router.navigate(['/personajes'])
      } else {
        this.action.emit('prev')
      }

    }
  }
}
