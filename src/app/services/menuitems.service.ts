import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuitemsService {
  
  constructor() {}

  menuItems = [
    // { label: "Inici", link: '/home', color: '#bcff40' },
    { label: "El nostre equip", link: '/equip', color: '#ff4081' },
    { label: 'El candidat', link: '/candidat', color: '#ff9800' },
    { label: 'Agenda', link: '/agenda', color: '#03a9f4' },
    { label: 'El programa', link: '/programa', color: '#30e720ff' },
    { label: 'Campanya', link: '/campanya', color: '#e61616ff' },
    { label: 'Proposa', link: '/proposa', color: '#ffd740' },
    { label: 'Test', link: '/test', color: '#000000' },
  ];

  public getMenuItems(): any[] {
    return this.menuItems;
  }
}
