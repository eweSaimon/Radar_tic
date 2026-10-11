import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oportunidad } from '../models/oportunidad';

@Injectable({ providedIn: 'root' })
export class OportunidadesService {
  private http = inject(HttpClient);

  private readonly url = 'oportunidades.json';

  private _oportunidades = signal<Oportunidad[]>([]);
  private _cargando = signal<boolean>(false);
  private _error = signal<string | null>(null);

  readonly oportunidades = this._oportunidades.asReadonly();
  readonly cargando = this._cargando.asReadonly();
  readonly error = this._error.asReadonly();

  cargarOportunidades(): void {
    this._cargando.set(true);
    this._error.set(null);

    this.http.get<Oportunidad[]>(this.url).subscribe({
      next: (datos) => {
        this._oportunidades.set(datos);
        this._cargando.set(false);
      },
      error: () => {
        this._error.set('No se pudieron cargar las oportunidades. Intenta de nuevo más tarde.');
        this._cargando.set(false);
      },
    });
  }
}
