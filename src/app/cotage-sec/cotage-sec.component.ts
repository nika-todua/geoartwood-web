import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-cotage-sec',
  templateUrl: './cotage-sec.component.html',
  styleUrl: './cotage-sec.component.scss'
})
export class CotageSecComponent {
  ngOnInit(){
    var splide = new Splide( '.mysplider1', {
      perPage: 4,
      gap: '25px',
      breakpoints: {
        1200: {
          perPage: 4,
          gap    : '25px',
          height : '500px',
        },
        859: {
          perPage: 3,
          gap    : '15px',
          height : '500px',
        },
        660: {
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