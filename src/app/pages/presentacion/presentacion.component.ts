import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-presentacion',
    templateUrl: 'presentacion.component.html',
    styleUrls: ['presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {

    timer = 3
    showMessages = false

    constructor(
        private router: Router,
        private storageService: StorageService,
    ) {
    }

    ngOnInit() {
        this.count(3)
        // TODO: usar metodo del simulador para cambiar a esta vista
        this.showMessages = false
        setTimeout(() => {
            this.showMessages = true
        }, 15000)

        //TODO: watch localstorage con estado de simulador ready --- cambiar este metodo!
        this.storageService.watchStorage().subscribe((data: string) => {
            console.log('presentacion', data)
            if (data == 'Ready' && this.showMessages) {
                this.router.navigate(['/simulador'])
            }
        })
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
