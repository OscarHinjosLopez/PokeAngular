import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private router: Router) {}

  /**
   * Método para redirigir a una ruta específica.
   * @param url La URL o ruta a la que se quiere redirigir.
   */
  redirectTo(url: string): void {
    if (url && typeof url === 'string') {
      this.router.navigate([url]).catch((err) => {
        console.error('Error al redirigir a la URL:', err);
      });
    }
  }

  // Function to capitalize the first letter of each word
  capitalizeFirstLetter(text: string): string {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
