import { Component, OnInit, DoCheck } from '@angular/core';
import { scrollToTop } from '../../utils/scroll-to-top';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  steps: any[] = [];
  currentLevel = 0;
  mobileMenuOpen = false;
  faBars = faBars;
  faXmark = faXmark;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.steps = this.navigationService.getSteps();
    this.currentLevel = this.navigationService.getCurrentLevel();
  }

  ngDoCheck(): void {
    // Atualiza o nível ativo sempre que houver mudança
    const newLevel = this.navigationService.getCurrentLevel();
    if (newLevel !== this.currentLevel) {
      this.currentLevel = newLevel;
    }
  }

  get currentStepNumber(): number {
    return this.currentLevel + 1;
  }

  get currentStepLabel(): string {
    return this.steps[this.currentLevel]?.label || '';
  }

  navigateTo(level: number): void {
    this.navigationService.navigateTo(level);
    this.currentLevel = this.navigationService.getCurrentLevel();
    this.updateRoute();
    scrollToTop();
  }

  navigateToStep(idx: number): void {
    this.navigateTo(idx);
    this.toggleMobileMenu();
    scrollToTop();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private updateRoute(): void {
    const routes = [
      'intro',
      'benefits',
      'eligibility1',
      'eligibility2',
      'rules',
      'calculation',
      'calculator',
      'penalties',
    ];
    this.router.navigate([routes[this.currentLevel]]);
  }
}
