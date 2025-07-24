import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleSelectorComponent } from '../vehicle-selector/vehicle-selector.component';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

interface BikeEntry {
  id: string;
  days: string;
  totalCount: number;
  paidCount: number;
}
interface ServiceOption {
  label: string;
  value: string;
  points: number;
}

@Component({
  selector: 'app-bonus-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    VehicleSelectorComponent,
    FontAwesomeModule,
    NavigationButtonsComponent,
  ],
  templateUrl: './bonus-calculator.component.html',
  styleUrls: ['./bonus-calculator.component.scss'],
})
export class BonusCalculatorComponent {
  constructor(private faLibrary: FaIconLibrary) {
    faLibrary.addIcons(faPen, faTrash);
  }
  carOptions: ServiceOption[] = [
    { label: '1-7 dias', value: '1-7', points: 1 },
    { label: '8-15 dias', value: '8-15', points: 2 },
    { label: '16-30 dias', value: '16-30', points: 3 },
    { label: '31-50 dias', value: '31-50', points: 4 },
    { label: '50+ dias', value: '50+', points: 5 },
  ];

  motoOptions: ServiceOption[] = [
    { label: 'Moto desligando sozinha', value: 'desligando', points: 2 },
    { label: 'Moto não liga - Não Identificado', value: 'nao-liga', points: 2 },
    { label: 'Problema com embreagem', value: 'embreagem', points: 2 },
    { label: 'Moto não Desbloqueia', value: 'nao-desbloqueia', points: 2 },
    { label: 'Problema Elétrico', value: 'eletrico', points: 2 },
    { label: 'Outros', value: 'outros', points: 1 },
  ];

  selectedVehicle: 'car' | 'motorcycle' = 'car';
  entries: BikeEntry[] = [];
  form = { days: '', totalCount: '', paidCount: '' };
  totalPoints = 0;
  editId: string | null = null;
  totalMotos = 0;
  bonus = 0;

  get options(): ServiceOption[] {
    return this.selectedVehicle === 'car' ? this.carOptions : this.motoOptions;
  }

  get minPoints(): number {
    return this.selectedVehicle === 'car' ? 6 : 5;
  }

  calculateBonus(points: number): number {
    if (points < this.minPoints) return 0;
    return 40 + (points - this.minPoints) * 15;
  }

  valueToBRL(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  handleAddOrEditEntry(): void {
    const { days, totalCount, paidCount } = this.form;
    const total = parseInt(totalCount);
    const paid = parseInt(paidCount);

    if (!days || isNaN(total) || total < 0) return;
    if (
      this.selectedVehicle === 'car' &&
      (isNaN(paid) || paid > total || paid < 0)
    )
      return;

    const newEntry: BikeEntry = {
      id: this.editId || uuidv4(),
      days,
      totalCount: total,
      paidCount: this.selectedVehicle === 'car' ? paid : 0,
    };

    this.entries = this.editId
      ? this.entries.map((e) => (e.id === this.editId ? newEntry : e))
      : [...this.entries, newEntry];

    this.form = { days: '', totalCount: '', paidCount: '' };
    this.editId = null;
  }

  handleCalculate(): void {
    this.totalPoints = this.entries.reduce((acc, entry) => {
      const baseOption = this.options.find((o) => o.value === entry.days);
      if (!baseOption) return acc;

      if (this.selectedVehicle === 'car') {
        const totalFromPaid = entry.paidCount * (baseOption.points + 1);
        const totalFromUnpaid =
          (entry.totalCount - entry.paidCount) * baseOption.points;
        return acc + totalFromPaid + totalFromUnpaid;
      } else {
        return acc + entry.totalCount * baseOption.points;
      }
    }, 0);

    this.totalMotos = this.entries.reduce((sum, e) => sum + e.totalCount, 0);
    this.bonus = this.calculateBonus(this.totalPoints);
  }

  handleDelete(id: string): void {
    this.entries = this.entries.filter((e) => e.id !== id);
    if (this.editId === id) {
      this.form = { days: '', totalCount: '', paidCount: '' };
      this.editId = null;
    }
  }

  handleEdit(entry: BikeEntry): void {
    this.form = {
      days: entry.days,
      totalCount: String(entry.totalCount),
      paidCount: String(entry.paidCount),
    };
    this.editId = entry.id;
  }

  getLabel(value: string): string {
    const option = this.options.find((o) => o.value === value);
    return option ? option.label : '';
  }
}
