import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-personajes',
    templateUrl: 'personajes.component.html',
    styleUrls: ['personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {

    first: boolean = true
    firstOver: boolean
    second: boolean
    secondOver: boolean

    constructor(
    ) {
    }

    ngOnInit() {
    }

    onAvatar(avatar: string) {
        if (avatar === 'first') {
            this.first = !this.first
            this.second = false
        }
        if (avatar === 'second') {
            this.second = !this.second
            this.first = false
        }
    }

    onAvatarOver(avatar: string) {
        if (avatar === 'first') {
            this.firstOver = !this.firstOver
        }
        if (avatar === 'second') {
            this.secondOver = !this.secondOver
        }
    }
}
