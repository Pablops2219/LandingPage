import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  // Obtenemos referencias directas a los elementos del HTML
  @ViewChild('nameLight') nameLight!: ElementRef;
  @ViewChild('nameBold') nameBold!: ElementRef;
  @ViewChild('roleContainer') roleContainer!: ElementRef;
  @ViewChild('sloganText') sloganText!: ElementRef;
  @ViewChild('logoText') logoText!: ElementRef;

  constructor() {}

  // Usamos ngAfterViewInit, no ngOnInit
  ngAfterViewInit(): void {
    // Aquí el HTML ya existe seguro.
    this.animateSequence();
  }

  private animateSequence(): void {
    // Creamos el array de configuración aquí dentro
    const elements = [
      { el: this.nameLight, delay: 100 },
      { el: this.nameBold, delay: 300 },
      { el: this.roleContainer, delay: 500 },
      { el: this.sloganText, delay: 900 },
      { el: this.logoText, delay: 1100 },
    ];

    elements.forEach((item) => {
      // Verificamos que el elemento exista (nativeElement)
      if (item.el && item.el.nativeElement) {
        // Timeout para la animación
        setTimeout(() => {
          // Angular usa nativeElement para tocar el DOM real
          item.el.nativeElement.classList.remove('hidden');
          item.el.nativeElement.classList.add('visible');
        }, item.delay);
      }
    });
  }

  menuItems = [
    { label: "L'Equip", link: '/equip', color: '#ff4081' },
    { label: 'El candidat', link: '/candidat', color: '#ff9800' },
    { label: 'Agenda', link: '/agenda', color: '#03a9f4' },
    { label: 'El programa', link: '/programa', color: '#30e720ff' },
    { label: 'Campanya', link: '/campanya', color: '#e61616ff' },
    { label: 'Proposa', link: '/proposa', color: '#ffd740' },
  ];

  currentBg = '/FOTO3.jpg';
  changeImage(): void {
    // Alternamos entre las dos imágenes
    this.currentBg = this.currentBg.includes('FOTO3.jpg')
      ? '/FOTO2.jpg'
      : '/FOTO3.jpg';
      console.log('Imagen cambiada a:', this.currentBg);
  }
}
