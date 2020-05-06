import { Component, OnInit } from '@angular/core'
import { SimulatorService } from 'src/app/services/simulator.service'

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
    private simService: SimulatorService
  ) { }

  ngOnInit() {
    let avatar = this.simService.getAvatar();
    switch (avatar) {
      case 'Male':
        this.first = true;
        this.second = false;
        break;
      case 'Female':
        this.first = false;
        this.second = true;
        break;
      default:
        this.first = true;
        this.second = false;
        break;
    }
  }

  onAvatar(avatar: string) {
    if (avatar === 'Male') {
      this.first = !this.first
      this.second = false
    }
    if (avatar === 'Female') {
      this.second = !this.second
      this.first = false
    }
    console.log('Avatar',avatar)
    this.simService.setAvatar(avatar);
  }

  onAvatarOver(avatar: string) {
    if (avatar === 'Male') {
      this.firstOver = !this.firstOver
    }
    if (avatar === 'Female') {
      this.secondOver = !this.secondOver
    }
  }
}
