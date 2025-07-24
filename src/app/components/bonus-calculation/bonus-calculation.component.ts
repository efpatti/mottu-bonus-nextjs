import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleSelectorComponent } from '../vehicle-selector/vehicle-selector.component';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-bonus-calculation',
  standalone: true,
  imports: [CommonModule, VehicleSelectorComponent, NavigationButtonsComponent],
  templateUrl: './bonus-calculation.component.html',
  styleUrls: [],
})
export class BonusCalculationComponent {
  selectedVehicle: 'motorcycle' | 'car' = 'motorcycle';

  onSelectVehicle(vehicle: 'motorcycle' | 'car') {
    this.selectedVehicle = vehicle;
  }
}
