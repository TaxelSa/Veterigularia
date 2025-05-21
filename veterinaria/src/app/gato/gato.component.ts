import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // 👈 Importar el módulo y el cliente HTTP
import { CommonModule } from '@angular/common'; // Necesario para *ngIf y *ngFor

interface Gato {
  num: number;
  nombre: string;
  raza: string;
}

@Component({
  selector: 'app-gato',
  standalone: true, // 👈 Asegúrate que el componente sea standalone si estás usando este enfoque
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css'],
  imports: [CommonModule, HttpClientModule] // 👈 ¡IMPORTANTE! Aquí se importa el módulo de HTTP
})
export class GatoComponent implements OnInit {
  gatos: Gato[] = [];
  detalles: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Gato[]>('http://localhost/Veterigularia/veterinaria/php/obtener_gatos.php')
      .subscribe(data => this.gatos = data);
  }

  verDetalles(num: number) {
    this.http.get(`http://localhost/Veterigularia/veterinaria/php/obtener_detalles_gato.php?num=${num}`)
      .subscribe(data => this.detalles = data);
  }
}
