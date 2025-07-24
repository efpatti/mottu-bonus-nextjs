import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faInfoCircle,
  faMotorcycle,
  faCar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss'],
})
export class VehicleInfoComponent {
  @Input() selectedVehicle: 'motorcycle' | 'car' | null = null;
  @Input() showSelector: boolean = false;
  @Output() vehicleSelected = new EventEmitter<'motorcycle' | 'car'>();

  // Font Awesome icons
  faInfoCircle = faInfoCircle;
  faMotorcycle = faMotorcycle;
  faCar = faCar;

  selectVehicle(vehicle: 'motorcycle' | 'car'): void {
    this.vehicleSelected.emit(vehicle);
  }
}
