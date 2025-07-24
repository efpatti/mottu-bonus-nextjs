import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleInfoComponent } from '../vehicle-info/vehicle-info.component';
import {
  FaIconComponent,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faMotorcycle, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vehicle-selector',
  standalone: true,
  imports: [CommonModule, VehicleInfoComponent, FaIconComponent],
  templateUrl: './vehicle-selector.component.html',
  styleUrls: ['./vehicle-selector.component.scss'],
})
export class VehicleSelectorComponent {
  faMotorcycle = faMotorcycle;
  faCar = faCar;

  constructor(private faLibrary: FaIconLibrary) {
    faLibrary.addIcons(faMotorcycle, faCar);
  }
  @Input() selectedVehicle: 'motorcycle' | 'car' = 'motorcycle';
  @Output() selectedVehicleChange = new EventEmitter<'motorcycle' | 'car'>();

  onSelectVehicle(vehicle: 'motorcycle' | 'car') {
    this.selectedVehicle = vehicle;
    this.selectedVehicleChange.emit(vehicle);
  }
}
