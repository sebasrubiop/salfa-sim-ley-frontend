import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    url: string
    continuar: boolean
    comenzar: boolean

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.url = this.router.url
    }

    onHover(btn: string) {
        if(btn === 'continuar'){
            this.continuar = !this.continuar
            this.comenzar = false
        } 
        if(btn === 'comenzar'){
            this.comenzar = !this.comenzar
            this.continuar = false
        } 
    }

    goTo() {
        if(this.url === '/home') {
            this.router.navigate(['/personajes'])
        }
        if(this.url === '/personajes') {
            this.router.navigate(['/instrucciones'])
        } else {
            console.log(this.url)
        }
    }
}
