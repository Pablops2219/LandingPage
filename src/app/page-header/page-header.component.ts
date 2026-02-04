import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  
  @Input() text!: string;
  @Input() highlightedText!: string;
  @Input() color1!: string;
  @Input() color2!: string;
}
