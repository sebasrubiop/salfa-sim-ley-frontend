import { Injectable, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const AVATAR = 'avatar';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  private _ready: boolean = false;
  private _iframe: ElementRef;
  puntaje = 0;

  setAvatar(avatar: string) {
    console.log(avatar)
    localStorage.setItem(AVATAR, avatar);
  }
  getAvatar() {
    if (!localStorage.getItem(AVATAR)) {
      localStorage.setItem(AVATAR, 'Male');
    }
    return localStorage.getItem(AVATAR);
  }

  get ready() {
    return this._ready;
  }
  set ready(ready: boolean) {
    this._ready = ready;
  }

  set iframe(iframe: ElementRef) {
    this._iframe = iframe;
  }

  sendMessage(message: string) {
    console.log('entró', message, this._iframe)
    if (this._iframe) {
      this._iframe.nativeElement.contentWindow.postMessage(message, '*');

    }
  }







}
