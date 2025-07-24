import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleSelectorComponent } from '../vehicle-selector/vehicle-selector.component';
import { BonusRulesDisplayComponent } from '../bonus-rules-display/bonus-rules-display.component';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-bonus-rules',
  standalone: true,
  imports: [
    CommonModule,
    VehicleSelectorComponent,
    BonusRulesDisplayComponent,
    NavigationButtonsComponent,
  ],
  templateUrl: './bonus-rules.component.html',
  styleUrls: ['./bonus-rules.component.scss'],
})
export class BonusRulesComponent {
  selectedVehicle: 'motorcycle' | 'car' = 'motorcycle';

  onSelectVehicle(vehicle: 'motorcycle' | 'car'): void {
    this.selectedVehicle = vehicle;
  }
}
