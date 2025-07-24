import { NavigationService } from "../services/navigation.service";
import { scrollToTop } from "./scroll-to-top";

export function nextLevel(navigationService: NavigationService): void {
  const current = navigationService.getCurrentLevel();
  const steps = navigationService.getSteps();
  if (current < steps.length - 1) {
    navigationService.navigateTo(current + 1);
    scrollToTop();
  }
}

export function previousLevel(navigationService: NavigationService): void {
  const current = navigationService.getCurrentLevel();
  if (current > 0) {
    navigationService.navigateTo(current - 1);
    scrollToTop();
  }
}
