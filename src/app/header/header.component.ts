import { Component,HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuitemsService } from '../services/menuitems.service';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSticky = false;

  private menuItemsService = inject(MenuitemsService);
  menuItems: any[] = [];
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.menuItems = this.menuItemsService.getMenuItems();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }

}
