import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-personajes',
    templateUrl: 'personajes.component.html',
    styleUrls: ['personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {

    first: boolean = true
    second: boolean
    
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
}
