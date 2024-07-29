import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depositions',
  templateUrl: './card-depositions.component.html',
  styleUrl: './card-depositions.component.scss'
})
export class CardDepositionsComponent {

    deposition: string =
    `Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.`;

    audit: string = 'Mariana Faustino';
}
