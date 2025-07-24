import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUsers,
  faClock,
  faSearch,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

interface FiliaisProps {
  unit: string;
  providers: number;
}

@Component({
  selector: 'app-eligibility-steps-1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NavigationButtonsComponent,
  ],
  templateUrl: './eligibility-steps-1.component.html',
  styleUrls: ['./eligibility-steps-1.component.scss'],
})
export class EligibilityStepsComponent {
  // Font Awesome icons
  faUsers = faUsers;
  faClock = faClock;
  faSearch = faSearch;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  steps = ['Elegibilidade', 'Metas'];
  searchTerm = '';
  selectedUnit: FiliaisProps | null = null;
  filteredFiliais: FiliaisProps[] = [];

  filiais: FiliaisProps[] = [
    { unit: 'Mottu Salvador', providers: 10 },
    { unit: 'Mottu São Miguel', providers: 10 },
    { unit: 'Mottu Porto Alegre', providers: 8 },
    { unit: 'Mottu Limão - Zona Norte', providers: 8 },
    { unit: 'Mottu São Bernardo', providers: 8 },
    { unit: 'Mottu Taboão', providers: 8 },
    { unit: 'Mottu Campinas', providers: 8 },
    { unit: 'Mottu Ipiranga', providers: 8 },
    { unit: 'Mottu São Luís', providers: 8 },
    { unit: 'Mottu Interlagos', providers: 8 },
    { unit: 'Mottu Jandira', providers: 8 },
    { unit: 'Mottu Butantã', providers: 8 },
    { unit: 'Mottu Recife', providers: 6 },
    { unit: 'Mottu Santos', providers: 6 },
    { unit: 'Mottu Fortaleza', providers: 6 },
    { unit: 'Mottu Praia Grande', providers: 6 },
    { unit: 'Mottu Belém', providers: 6 },
    { unit: 'Mottu Belo Horizonte', providers: 6 },
    { unit: 'Mottu Teresina', providers: 6 },
    { unit: 'Mottu Fátima', providers: 6 },
    { unit: 'Mottu Florianópolis', providers: 6 },
    { unit: 'Mottu Natal', providers: 6 },
    { unit: 'Mottu Manaus', providers: 6 },
    { unit: 'Mottu Cuiabá', providers: 6 },
    { unit: 'Mottu Aracaju', providers: 6 },
    { unit: 'Mottu Maceió', providers: 6 },
    { unit: 'Mottu Maracanaú', providers: 6 },
    { unit: 'Mottu Olinda', providers: 6 },
    { unit: 'Mottu Mogi das Cruzes', providers: 4 },
    { unit: 'Mottu Guarulhos', providers: 4 },
    { unit: 'Mottu Vila Velha', providers: 4 },
    { unit: 'Mottu Ananindeua', providers: 4 },
    { unit: 'Mottu Curitiba', providers: 4 },
    { unit: 'Mottu Serra', providers: 4 },
    { unit: 'Mottu Jundiaí', providers: 4 },
    { unit: 'Mottu João Pessoa', providers: 4 },
    { unit: 'Mottu Aparecida de Goiânia', providers: 4 },
    { unit: 'Mottu Piracicaba', providers: 4 },
    { unit: 'Mottu Brasília', providers: 4 },
    { unit: 'Mottu Campo Grande', providers: 4 },
    { unit: 'Mottu Messejana', providers: 4 },
    { unit: 'Mottu Piçarreira', providers: 4 },
    { unit: 'Mottu Parnamirim', providers: 4 },
    { unit: 'Mottu Sorocaba', providers: 4 },
    { unit: 'Mottu Goiânia', providers: 4 },
    { unit: 'Mottu Icoaraci', providers: 4 },
    { unit: 'Mottu Vitória', providers: 4 },
    { unit: 'Mottu Contagem', providers: 4 },
    { unit: 'Mottu Rio Branco', providers: 4 },
    { unit: 'Mottu Uberlândia', providers: 4 },
    { unit: 'Mottu Feira de Santana', providers: 4 },
    { unit: 'Mottu Campina Grande', providers: 4 },
    { unit: 'Mottu Pindamonhangaba', providers: 4 },
    { unit: 'Mottu Porto Velho', providers: 4 },
    { unit: 'Mottu Joinville', providers: 4 },
  ];

  normalizar(str: string): string {
    return str
      .normalize('NFD') // separa letras de acentos
      .replace(/[\u0300-\u036f]/g, '') // remove os acentos
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  onSearchInput(): void {
    if (!this.searchTerm) {
      this.filteredFiliais = [];
      return;
    }

    const termo = this.normalizar(this.searchTerm);
    this.filteredFiliais = this.filiais.filter((filial) =>
      this.normalizar(filial.unit).includes(termo)
    );
  }

  handleSelectUnit(filial: FiliaisProps): void {
    this.selectedUnit = filial;
    this.searchTerm = filial.unit;
    this.filteredFiliais = [];
  }
}
