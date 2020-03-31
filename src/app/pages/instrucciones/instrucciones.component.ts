import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-instrucciones',
  templateUrl: 'instrucciones.component.html',
  styleUrls: ['instrucciones.component.scss'],
})
export class InstruccionesComponent implements OnInit {

  instrucciones: number ;

  constructor( private router: Router
  ) {
  }

  ngOnInit() {
    this.instrucciones = 1;
  }

  onClick(){
    this.instrucciones++ ;
  }
  
}
