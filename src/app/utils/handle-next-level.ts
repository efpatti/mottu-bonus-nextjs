import { NavigationService } from '../services/navigation.service';
import { nextLevel, previousLevel } from './level-navigation';

export function handleNextLevelGlobal(
  navigationService: NavigationService
): void {
  nextLevel(navigationService);
}

export function handlePreviousLevelGlobal(
  navigationService: NavigationService
): void {
  previousLevel(navigationService);
}
