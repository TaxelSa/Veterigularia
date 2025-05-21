import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-saludar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  nombre: string = '';
  mensaje: string = '';
  mostrarMensaje: boolean = false;

  Saludar() {
    if (this.nombre.trim()) {
      this.mensaje = `¡Hola, ${this.nombre}!`;
    } else {
      this.mensaje ='Por favor, escribe tu nombre';
    }

    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000);
    this.nombre = '';
  }
}
