import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-instrucciones',
  templateUrl: 'instrucciones.component.html',
  styleUrls: ['instrucciones.component.scss'],
})
export class InstruccionesComponent implements OnInit {

  instrucciones: number;

  constructor() {
  }

  ngOnInit() {
    this.instrucciones = 1;
  }

  onAction(event) {
    if (event === 'next') {
      this.instrucciones++;
    }
  }

}
