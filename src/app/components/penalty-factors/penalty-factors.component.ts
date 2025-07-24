import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-penalty-factors',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NavigationButtonsComponent],
  templateUrl: './penalty-factors.component.html',
  styleUrls: ['./penalty-factors.component.scss'],
})
export class PenaltyFactorsComponent {
  faAlertTriangle = faTriangleExclamation;

  penaltyFactors: string[] = [
    'Ultrapassar 90 km/h: perde o bônus diário',
    'Faltas injustificadas: perde o bônus quinzenal',
    'Ultrapassar 120 km/h: perde a quinzena do bônus mensal',
    'Atrasos ou sair antes do horário: penalidade no bônus diário (melhor dia da quinzena)',
    'Perda de ferramenta: desconto no bônus se positivo',
  ];
}
