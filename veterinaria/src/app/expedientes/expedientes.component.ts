import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // ✅ Importar Router y RouterModule

@Component({
  selector: 'app-expedientes',
  standalone: true,
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] // ✅ Agregar RouterModule
})
export class ExpedientesComponent {
  animales = ['Perro', 'Gato', 'Pájaro'];
  tipoSeleccionado = '';
  mostrarMensaje = false;
  nuevaMascota = '';

  constructor(private router: Router) {} // ✅ Inyectar el Router

  seleccionar(animal: string) {
    this.tipoSeleccionado = animal;
    this.mostrarMensaje = true;

    // ✅ Redirigir si es Gato
    if (animal === 'Gato') {
      this.router.navigate(['/gato']);
    }
  }

  agregarMascota() {
    const nombre = this.nuevaMascota.trim();
    if (nombre && !this.animales.includes(nombre)) {
      this.animales.push(nombre);
      this.nuevaMascota = '';
    }
  }
}

