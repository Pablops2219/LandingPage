import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../page-header/page-header.component"; // Importante si usas standalone

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.circleContainer = document.querySelector('.circle-container'); // first
    
  }
  circleContainer: Element | null = null;

  constructor() {}

  onMouseOver(child: number) {
    const target = this.circleContainer?.children[child-1];
    // console.log('Mouse over on:', target);
    target?.setAttribute('style', 'transform: scale(1.2);');
  }

  onMouseOut(child: number) {
    const target = this.circleContainer?.children[child-1];
    // console.log('Mouse out from:', target);
    target?.setAttribute('style', 'transform: scale(1);');
  }

  docs: Record<number, string> = {
    1: 'documento1.pdf',
    2: 'documento2.pdf',
    3: 'documento3.pdf',
    4: 'documento4.pdf',
    5: 'documento5.pdf',
  }
  onClick(child: number) {
    open(`${this.docs[child]}`, '_blank');
  }
}