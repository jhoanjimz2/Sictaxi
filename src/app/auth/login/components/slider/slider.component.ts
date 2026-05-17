import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  playstore() {
    window.open('https://play.google.com/store/apps/details?id=gov.co.santamarta.buentaxiapp&hl=es_CO&gl=US');
  }
  appstore() {
    window.open('https://apps.apple.com/us/app/buen-taxi/id1363253486');
  }
  instagram() {
    window.open('https://www.instagram.com/innlabcorp/');
  }
  twitter() {
    window.open('https://twitter.com/InnLabCorp');
  }
  facebook() {
    window.open('https://web.facebook.com/Innlabcorp/');
  }
  constructor() { setTimeout(() => this.activar(),4000) }
  activar() { var button = (<HTMLButtonElement>document.getElementById("bnext")); button.click(); }
}
