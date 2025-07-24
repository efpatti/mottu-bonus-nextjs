import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusComponent } from '../bonus/bonus.component';

@Component({
  selector: 'app-bonus-rules-display',
  standalone: true,
  imports: [CommonModule, BonusComponent],
  templateUrl: './bonus-rules-display.component.html',
  styleUrls: ['./bonus-rules-display.component.scss'],
})
export class BonusRulesDisplayComponent {
  @Input() vehicleType: 'motorcycle' | 'car' = 'motorcycle';
}
