// penalty.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { NavigationButtonsComponent } from "../navigation-buttons/navigation-buttons.component";

@Component({
  selector: "app-penalty-factors",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NavigationButtonsComponent],
  templateUrl: "./penalty-factors.component.html",
  styleUrls: ["./penalty-factors.component.scss"],
})
export class PenaltyFactorsComponent {
  faAlertTriangle = faTriangleExclamation;
  activeIndex = 0; // Primeiro item aberto por padrão

  penaltyFactors = [
    {
      title: "Ultrapassar 90 km/h",
      description:
        "Perde o bônus diário quando ultrapassar a velocidade máxima permitida.",
    },
    {
      title: "Faltas injustificadas",
      description:
        "Perde o bônus quinzenal quando possui faltas não justificadas.",
    },
    {
      title: "Ultrapassar 120 km/h",
      description:
        "Perde a quinzena do bônus mensal quando ultrapassa em muito a velocidade permitida.",
    },
    {
      title: "Atrasos ou sair antes do horário",
      description:
        "Penalidade no bônus diário (melhor dia da quinzena) quando não cumpre o horário completo.",
    },
    {
      title: "Perda de ferramenta",
      description:
        "Desconto no bônus se positivo quando ocorre perda de equipamentos.",
    },
  ];

  toggleItem(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
