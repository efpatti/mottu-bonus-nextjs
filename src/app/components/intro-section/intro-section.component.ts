import { Component } from '@angular/core';
import { handleNextLevelGlobal } from '../../utils/handle-next-level';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss'],
})
export class IntroSectionComponent {
  constructor(private navigationService: NavigationService) {}

  handleNextLevel(): void {
    handleNextLevelGlobal(this.navigationService);
  }
}
