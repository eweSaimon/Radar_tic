import { Component, computed, input, output } from '@angular/core';
import { Oportunidad } from '../../models/oportunidad';

@Component({
  selector: 'app-oportunidad-card',
  templateUrl: './oportunidad-card.html',
  styleUrl: './oportunidad-card.css',
})
export class OportunidadCard {
  oportunidad = input.required<Oportunidad>();

  seleccionada = output<Oportunidad>();

  estado = computed(() => {
    const cupos = this.oportunidad().cupos;
    if (cupos === 0) return 'sin-cupos';
    if (cupos <= 5) return 'ultimos';
    return 'disponible';
  });

  manifestarInteres(): void {
    if (this.oportunidad().cupos > 0) {
      this.seleccionada.emit(this.oportunidad());
    }
  }
}