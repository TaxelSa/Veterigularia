import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel

@Component({
  selector: 'app-expedientes',
  standalone: true,
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css'],
  imports: [CommonModule, FormsModule] // Agregar FormsModule aquí
})
export class ExpedientesComponent {
  animales = ['Perro', 'Gato', 'Pájaro'];
  tipoSeleccionado = '';
  mostrarMensaje = false;
  nuevaMascota = ''; // Variable para el input

  seleccionar(animal: string) {
    this.tipoSeleccionado = animal;
    this.mostrarMensaje = true;
  }

  agregarMascota() {
    const nombre = this.nuevaMascota.trim();
    if (nombre && !this.animales.includes(nombre)) {
      this.animales.push(nombre);
      this.nuevaMascota = ''; // Limpiar input
    }
  }
}
