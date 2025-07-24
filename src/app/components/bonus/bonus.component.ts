import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="w-full bg-white relative">
      <section class="py-8 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
        <!-- Valores -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Valores</h3>
          <p class="text-sm text-gray-600 mb-4">
            {{
              vehicleType === 'car'
                ? 'Para carros, 6 pontos garantem R$40, e cada ponto extra vale R$15.'
                : 'Para motos, 5 pontos garantem R$40, e cada ponto extra vale R$15.'
            }}
          </p>
          <div class="overflow-x-hidden">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="bg-green-50 text-green-800">
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Quantidade de Pontos
                  </th>
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Valor do Bônus
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr *ngFor="let row of bonusTableData">
                  <td class="px-4 py-3 capitalize">{{ row.tipo }}</td>
                  <td class="px-4 py-3 text-green-600 font-medium">
                    {{ row.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Acelerador -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Acelerador</h3>
          <p class="text-sm text-gray-600 mb-4">
            {{
              vehicleType === 'car'
                ? 'Você ganha muito mais se convencer o cliente a pagar. Existem diferentes pontuações a depender do tempo de inadimplência do cliente.'
                : 'Cada tipo de problema relatado na moto gera uma quantidade específica de pontos.'
            }}
          </p>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm" *ngIf="vehicleType === 'car'">
              <thead>
                <tr class="bg-green-50 text-green-800">
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Dias
                  </th>
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Serviço Recolhido
                  </th>
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Serviço Pago
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr *ngFor="let row of mainTableDataCar">
                  <td class="px-3 py-2">{{ row.dias }}</td>
                  <td class="px-3 py-2">
                    <span class="flex items-center gap-1">
                      <fa-icon
                        [icon]="faCheckCircle"
                        class="text-green-500"
                      ></fa-icon>
                      {{ row.recolhido }}
                      {{ row.recolhido > 1 ? 'pontos' : 'ponto' }}
                    </span>
                  </td>
                  <td class="px-3 py-2">
                    <span class="flex items-center gap-1">
                      <fa-icon
                        [icon]="faCheckCircle"
                        class="text-green-500"
                      ></fa-icon>
                      {{ row.pago }} {{ row.pago > 1 ? 'pontos' : 'ponto' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="min-w-full text-sm" *ngIf="vehicleType === 'moto'">
              <thead>
                <tr class="bg-green-50 text-green-800">
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Descrição do Serviço
                  </th>
                  <th
                    class="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    Pontos
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr *ngFor="let row of mainTableDataMoto">
                  <td class="px-3 py-2">{{ row.service_description }}</td>
                  <td class="px-3 py-2">
                    <span class="flex items-center gap-1">
                      <fa-icon
                        [icon]="faCheckCircle"
                        class="text-green-500"
                      ></fa-icon>
                      {{ row.value }} {{ row.value > 1 ? 'pontos' : 'ponto' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./bonus.component.scss'],
})
export class BonusComponent {
  @Input() vehicleType: 'moto' | 'car' = 'moto';

  faCheckCircle = faCheckCircle;

  bonusTableDataCar = [
    { tipo: '6 pontos', value: 'R$ 40,00' },
    { tipo: '+1 ponto', value: 'R$ 15,00' },
  ];
  bonusTableDataMoto = [
    { tipo: '5 pontos', value: 'R$ 40,00' },
    { tipo: '+1 ponto', value: 'R$ 15,00' },
  ];
  mainTableDataCar = [
    { dias: '1 a 7', recolhido: 1, pago: 2 },
    { dias: '8 a 15', recolhido: 2, pago: 3 },
    { dias: '16 a 30', recolhido: 3, pago: 4 },
    { dias: '31 a 50', recolhido: 4, pago: 5 },
    { dias: '> 50', recolhido: 5, pago: 6 },
  ];
  mainTableDataMoto = [
    { service_description: 'Moto desligando sozinha', value: 2 },
    { service_description: 'Moto não liga - Não Identificado', value: 2 },
    { service_description: 'Problema com embreagem', value: 2 },
    { service_description: 'Moto não Desbloqueia', value: 2 },
    { service_description: 'Problema Elétrico', value: 2 },
    { service_description: 'Outros', value: 1 },
  ];

  get bonusTableData() {
    return this.vehicleType === 'car'
      ? this.bonusTableDataCar
      : this.bonusTableDataMoto;
  }
}
