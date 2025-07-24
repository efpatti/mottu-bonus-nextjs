import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUsers,
  faInfoCircle,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-eligibility-steps-2',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NavigationButtonsComponent],
  templateUrl: './eligibility-steps-2.component.html',
  styleUrls: ['./eligibility-steps-2.component.scss'],
})
export class EligibilitySteps2Component {
  // Font Awesome icons
  faUsers = faUsers;
  faInfoCircle = faInfoCircle;
  faTrophy = faTrophy;
}
