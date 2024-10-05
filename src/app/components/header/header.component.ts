import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils-service.service';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private utilsService : UtilsService
  ){}

  /**
   * Método para redirigir a una página usando el servicio UtilsService.
   * @param word La palabra o ruta a la que se quiere redirigir.
   */
  goTo(word: string): void {
    if (word && typeof word === 'string') {
      const url: string = word.trim(); // Asegúrate de que la palabra esté limpia
      this.utilsService.redirectTo(url);
    }
  }
}
