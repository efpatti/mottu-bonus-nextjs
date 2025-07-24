import { Injectable } from '@angular/core';
import { Branch } from '../models/branch.model';
import { ServiceOption } from '../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private branches: Branch[] = [
    { unit: 'Mottu Salvador', providers: 10 },
    { unit: 'Mottu São Miguel', providers: 10 },
    { unit: 'Mottu Porto Alegre', providers: 8 },
  ];

  private motoOptions: ServiceOption[] = [
    { label: 'Moto desligando sozinha', value: 'desligando', points: 2 },
    { label: 'Moto não liga - Não Identificado', value: 'nao-liga', points: 2 },
  ];

  private carOptions: ServiceOption[] = [
    { label: '1-7 dias', value: '1-7', points: 1 },
    { label: '8-15 dias', value: '8-15', points: 2 },
  ];

  private penaltyFactors = {
    motorcycle: [
      'Ultrapassar 90 km/h: perde o bônus diário',
      'Ultrapassar 120 km/h: perde a quinzena do bônus mensal',
    ],
    car: [
      'Ultrapassar limites de velocidade: penalidade no bônus',
      'Faltas injustificadas: perde o bônus quinzenal',
    ],
  };

  getBranches() {
    return this.branches;
  }

  getMotoOptions() {
    return this.motoOptions;
  }

  getCarOptions() {
    return this.carOptions;
  }

  getPenaltyFactors(vehicle: 'motorcycle' | 'car') {
    return this.penaltyFactors[vehicle];
  }
}
