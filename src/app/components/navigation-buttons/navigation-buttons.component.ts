import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  handleNextLevelGlobal,
  handlePreviousLevelGlobal,
} from '../../utils/handle-next-level';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent {
  @Input() showOnlyPrevious: boolean = false;
  @Input() showOnlyNext: boolean = false;
  @Input() customNextLabel: string = 'Continuar';
  @Input() customPreviousLabel: string = 'Voltar';

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private navigationService: NavigationService) {}

  handleNextLevel(): void {
    handleNextLevelGlobal(this.navigationService);
  }
  handlePreviousLevel(): void {
    handlePreviousLevelGlobal(this.navigationService);
  }

  canGoNext(): boolean {
    // Permite avançar se não estiver no último nível
    const steps = this.navigationService.getSteps();
    return this.navigationService.getCurrentLevel() < steps.length - 1;
  }

  canGoPrevious(): boolean {
    // Permite voltar se não estiver no primeiro nível
    return this.navigationService.getCurrentLevel() > 0;
  }
}
