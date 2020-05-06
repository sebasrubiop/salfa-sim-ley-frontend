import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RusticiDriverService {
  private scormDriver: any;
  available = false;
  constructor() {
    this.scormDriver = window.parent;
    this.available = this.scormDriver && this.scormDriver.Start
  }
  setPassed() {
    if (this.available) {
      this.scormDriver.SetPassed();
      console.log('Mensaje entro en SetPassed()');
    }
  }
  setScore(intScore: number, intMaxScore: number, intMinScore: number) {
    if (this.available) {
      this.scormDriver.SetScore(intScore, intMaxScore, intMinScore)
      console.log('Mensaje entro en SetScore', intScore, intMaxScore, intMinScore);
    }
  }
}

