import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  logout() {
    // Implementación de logout
  }

  changeImage() {
    // Implementación de changeImage
  }

  // Asegúrate de que profile esté declarado o inicializado
  profile: any = {
    imageUrl: '...'
  };

}
