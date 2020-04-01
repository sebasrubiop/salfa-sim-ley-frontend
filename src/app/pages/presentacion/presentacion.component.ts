import { Component, OnInit } from '@angular/core'
import { range, interval } from 'rxjs'
import { map, take, switchMap } from 'rxjs/operators'

@Component({
    selector: 'app-presentacion',
    templateUrl: 'presentacion.component.html',
    styleUrls: ['presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {

    timer = 3

    constructor(
    ) {
    }

    ngOnInit() {
        this.count(3)
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
