import { Component, inject, OnInit, signal } from '@angular/core';
import { OportunidadesService } from './services/oportunidades.service';
import { OportunidadCard } from './components/oportunidad-card/oportunidad-card';
import { Oportunidad } from './models/oportunidad';

@Component({
  selector: 'app-root',
  imports: [OportunidadCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private servicio = inject(OportunidadesService);

  oportunidades = this.servicio.oportunidades;
  cargando = this.servicio.cargando;
  error = this.servicio.error;

  seleccionada = signal<Oportunidad | null>(null);

  ngOnInit(): void {
    this.servicio.cargarOportunidades();
  }
  
  alSeleccionar(oportunidad: Oportunidad): void {
    this.seleccionada.set(oportunidad);
  }

  reintentar(): void {
    this.servicio.cargarOportunidades();
  }
}