import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuitemsService } from '../services/menuitems.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
[x: string]: any;
  // Obtenemos referencias directas a los elementos del HTML
  @ViewChild('nameLight') nameLight!: ElementRef;
  @ViewChild('nameBold') nameBold!: ElementRef;
  @ViewChild('roleContainer') roleContainer!: ElementRef;
  @ViewChild('sloganText') sloganText!: ElementRef;
  @ViewChild('logoText') logoText!: ElementRef;

  constructor() {}

  private menuItemsService = inject(MenuitemsService);
  menuItems: any[] = [];
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.menuItems = this.menuItemsService.getMenuItems();
  }

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
  currentBg = '/FOTO3.jpg';
}
