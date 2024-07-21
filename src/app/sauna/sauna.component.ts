import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-sauna',
  templateUrl: './sauna.component.html',
  styleUrl: './sauna.component.scss'
})
export class SaunaComponent {
  
  ngOnInit(){

    var splide = new Splide( '.mysplider2', {
      perPage: 4,
      gap: '25px',
      breakpoints: {
        1200: {
          perPage: 4,
          gap    : '25px',
          height : '500px',
        },
        810: {
          perPage: 3,
          gap    : '15px',
          height : '500px',
        },
        600: {
          perPage: 2,
          gap    : '15px',
          height : '500px',
        },
        480: {
          perPage: 1,
          gap    : '12.5px',
          height : '500px',
        },
      },
    } );
    splide.mount();
  }

}
interface OnInit {
  ngOnInit(): void
}