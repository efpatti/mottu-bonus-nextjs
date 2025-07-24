import { Injectable } from "@angular/core";
import { scrollToTop } from "../utils/scroll-to-top";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private steps = [
    { stepNumber: 1, label: "Introdução" },
    { stepNumber: 2, label: "Benefícios" },
    { stepNumber: 3, label: "Elegibilidade 1" },
    { stepNumber: 4, label: "Elegibilidade 2" },
    { stepNumber: 5, label: "Regras do Bônus" },
    { stepNumber: 6, label: "Calcule você mesmo!" },
    { stepNumber: 7, label: "Fatores de Penalidade" },
  ];

  private currentLevel = 0;
  private selectedVehicle: "motorcycle" | "car" = "motorcycle";

  getSteps() {
    return this.steps;
  }

  getCurrentLevel() {
    return this.currentLevel;
  }

  getSelectedVehicle() {
    return this.selectedVehicle;
  }

  setSelectedVehicle(vehicle: "motorcycle" | "car") {
    this.selectedVehicle = vehicle;
  }

  navigateTo(level: number) {
    if (level >= 0 && level < this.steps.length) {
      this.currentLevel = level;
    }
  }

  nextLevel() {
    if (this.currentLevel < this.steps.length - 1) {
      this.currentLevel++;
    }
    scrollToTop();
  }

  previousLevel() {
    if (this.currentLevel > 0) {
      this.currentLevel--;
    }
    scrollToTop();
  }
}
