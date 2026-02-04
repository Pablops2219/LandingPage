import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from "../page-header/page-header.component";

@Component({
  selector: 'app-campanya',
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './campanya.component.html',
  styleUrl: './campanya.component.css'
})
export class CampanyaComponent {
  mainNews = {
  title: 'Presentació del Programa Estratègic per a la Universitat de València 2026-2030',
  source: 'Candidatura UV',
  date: '3 de febrer de 2026, 10:30',
  imageUrl: 'https://placehold.co/800x450/333333/ffffff?text=Presentació+Programa'
};

secondaryNews = [
  {
    title: 'Propostes per a l\'Estabilitat del PDI: Cap a un model de carrera investigadora transparent i sostenible',
    source: 'Gobernanza UV',
    date: '3 de febrer de 2026, 09:15',
    imageUrl: 'https://placehold.co/400x225/333333/ffffff?text=Investigació'
  },
  {
    title: 'Ampliació d\'infraestructures al Campus de *Tarongers*: Nous espais per a la innovació i la col·laboració',
    source: 'Infraestructures',
    date: '2 de febrer de 2026, 18:45',
    imageUrl: 'https://placehold.co/400x225/333333/ffffff?text=Campus+Tarongers'
  }
];
}
