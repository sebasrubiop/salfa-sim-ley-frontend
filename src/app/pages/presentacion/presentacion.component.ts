import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'app-presentacion',
    templateUrl: 'presentacion.component.html',
    styleUrls: ['presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {

    timer = 3

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.count(3)
        // TODO: usar metodo del simulador para cambiar a esta vista
        setTimeout(()=>{
            this.router.navigate(['/simulador'])
        },15000)
    }

    count(n) {
        if (n === 0) {
            this.count(3);
        } else {
            this.timer = n
            setTimeout(() => {
                this.count(n - 1)
            }, 5000)
        }
    }
}
