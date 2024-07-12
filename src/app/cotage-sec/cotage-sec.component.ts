import { Component } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-cotage-sec',
  templateUrl: './cotage-sec.component.html',
  styleUrl: './cotage-sec.component.scss'
})
export class CotageSecComponent {

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  ngOnInit(){
    
    this.shuffle(this.caruselarr);
    
    var swiper = new Swiper(".house-mySwiper-carusel", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 12.5,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        810: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 25,
        }
      },
    });

  }
  
  
  caruselarr = [
    {
      img_big: '../../../assets/img/kotejebi/koteji1.webp',
      alt: 'Cottage 1',
    },
    {
      img_big: '../../../assets/img/kotejebi/koteji2.webp',
      alt: 'Cottage 2',
    },
    {
      img_big: '../../../assets/img/kotejebi/koteji3.webp',
      alt: 'Cottage 3',
    },
    {
      img_big: '../../../assets/img/kotejebi/koteji4.webp',
      alt: 'Cottage 4',
    },
    {
      img_big: '../../../assets/img/kotejebi/u4YOdnFmSAW3fykeggTtjvZb8q1Zs5AczOC2MhFB.jpg',
      alt: 'Cottage 5',
    },
    {
      img_big: '../../../assets/img/kotejebi/koteji5.jpg',
      alt: 'Cottage 6',
    },
    {
      img_big: '../../../assets/img/kotejebi/koteji6.jpg',
      alt: 'Cottage 7',
    }
  ]
  
}
interface OnInit {
  ngOnInit(): void
}