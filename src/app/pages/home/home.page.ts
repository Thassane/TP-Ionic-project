import { Component, OnInit, ViewChild } from '@angular/core';
import { MethodHijacker } from 'src/app/decorators/methodHijacker.decorator';
import { PropsChangedTracker } from 'src/app/decorators/propsChangedTracker.decorator';
import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';
import { Traductor } from 'src/app/decorators/traductor.decorator';

import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { modalEnterAnimation } from 'src/app/animations/modal-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
@TimeTracker("home")
export class HomePage implements OnInit {

  // @PropsChangedTracker() // PropertyDecorator
  // simpleProp;

  @Traductor("eng") // PropertyDecorator
  welcomeMessage: String;

  data: any;

  storageStatus: any = window.localStorage.getItem('item');

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      showBackdrop: true,
      backdropDismiss: true,
      enterAnimation: modalEnterAnimation,
      cssClass: 'custom-modal'
    });

    await modal.present();
  }

  constructor(private modalCtrl: ModalController) {
    this.data = [
      {
        title: 'Plannifier sa semaine',
        description: 'Visibilité sur les 7 prochains jours',
        icon: './assets/img/1.jpg'
      },
      {
        title: 'Atteindre ses objectifs',
        description: 'Priorisation des tâches',
        icon: './assets/img/2.jpg'
      },
      {
        title: 'Analyser sa productivité',
        description: 'Visualiser le travail accompli',
        icon: './assets/img/4.jpg'
      },
      {
        title: 'Plannifier sa semaine',
        description: 'Visibilité sur les 7 prochains jours',
        icon: './assets/img/1.jpg'
      },
      {
        title: 'Atteindre ses objectifs',
        description: 'Priorisation des tâches',
        icon: './assets/img/2.jpg'
      },
      {
        title: 'Analyser sa productivité',
        description: 'Visualiser le travail accompli',
        icon: './assets/img/4.jpg'
      }
    ];

    // this.simpleProp = 1;
  }

  ngOnInit() {
    window.localStorage.removeItem('item');
    this.sayGoodBye();
  }

  onClick(event) {
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('item', this.storageStatus);
    }
    else {
      document.body.setAttribute('data-theme', 'light');
      window.localStorage.setItem('item', this.storageStatus);
    }
  }

  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  @MethodHijacker() // MethodDecorator
  sayGoodBye() {
    console.log("Good bye");
  }

}
