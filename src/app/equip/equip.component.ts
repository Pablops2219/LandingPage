import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equip',
  imports: [CommonModule, NgIf],
  templateUrl: './equip.component.html',
  styleUrl: './equip.component.css',
})
export class EquipComponent {
  teamItems = [
    {
      name: 'JUAN LUIS GANDIA CABEDO',
      role: 'PDI-Catedratic/a d\'Universitat',
      photo: 'equip1.jpg',
      color: '#ffcc00',
      bio: "Catedrático de Economía Financiera y Contabilidad en el Departament de Comptabilitat de la Facultat d’Economia de la Universitat de València. Director del Centre d'Innovació en Tecnologia per a l'Aprenentatge i la Investigació (CITAI).",
      linkedin: '#',
      email: 'ana@uv.es',
    },
    {
      name: 'INMACULADA COMA TATAY',
      role: 'PDI-Titular d\'Universitat',
      photo: 'equip2.jpg',
      color: '#04d9ff',
      bio: 'Inmaculada Coma es profesora Titular del Área de Ciencia de la Computación e Inteligencia Artificial en el Departamento de Informática de la Universitat de València. ',
      linkedin: '#',
      email: 'carles@uv.es',
    },
    {
      name: 'CARLOS JAVIER LOPEZ OLANO',
      role: 'PDI-Titular d\'Universitat',
      photo: 'equip3.jpg',
      color: '#ff5733',
      bio: 'Vicedecano de Comunicación e Innovación en la Facultad de Filología, Trad. i Comunicación. Licenciado en Filología Hispánica (Literatura Española) y Comunicación Audiovisual, así como doctor Cum Laude (Premio Extraordinario) por la Universitat de València.',
      linkedin: '#',
      email: 'marta@uv.es',
    },
    {
      name: 'ALBERT MONCUSI FERRE',
      role: 'PDI-Titular d\'Universitat',
      photo: 'equip4.jpg',
      color: '#8e44ad',
      bio: 'Llicenciat (1996) i Doctor (2002) en Antropología Social i Cultural por la Universitat Rovira i Virgili (Tarragona) y miembro numerario de la Secció de Filosofia i Ciències Socials de l’Institut d’Estudis Catalans desde 2021.',
      linkedin: '#',
      email: 'joan@uv.es',
    },
    {
      name: 'ALICIA VILLAR AGUILES',
      role: 'PDI-Titular d\'Universitat',
      photo: 'equip5.jpg',
      color: '#2ecc71',
      bio: "Profesora Titular de Universidad del Departamento de Sociología y Antropología Social de la Universidad de Valencia. Estoy adscrita al Instituto de Creatividad e Innovaciones Educativas.",
      linkedin: '#',
      email: 'elena@uv.es',
    }
  ];
}
