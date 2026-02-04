import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-programa',
  imports: [PageHeaderComponent],
  templateUrl: './programa.component.html',
  styleUrl: './programa.component.css',
})
export class ProgramaComponent {
  photos = [
    {
      photo: 'equip1.jpg',
    },
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.circleContainer = document.querySelector('.circle-container'); // first
  }
  circleContainer: Element | null = null;

  constructor() {}

  onMouseOver(child: number) {
    const target = this.circleContainer?.children[child - 1];
    // console.log('Mouse over on:', target);
    target?.setAttribute('style', 'transform: scale(1.2);');
  }

  onMouseOut(child: number) {
    const target = this.circleContainer?.children[child - 1];
    // console.log('Mouse out from:', target);
    target?.setAttribute('style', 'transform: scale(1);');
  }

  docs: Record<number, string> = {
    1: 'documento1.pdf',
    2: 'documento2.pdf',
    3: 'documento3.pdf',
    4: 'documento4.pdf',
    5: 'documento5.pdf',
  };
  onClick(child: number) {
    open(`${this.docs[child]}`, '_blank');
  }
}
