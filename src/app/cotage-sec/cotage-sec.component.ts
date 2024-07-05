import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-cotage-sec',
  templateUrl: './cotage-sec.component.html',
  styleUrl: './cotage-sec.component.scss'
})
export class CotageSecComponent {

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
    }
  ]

  ngOnInit(){

    var swiper = new Swiper(".house-mySwiper-desktop-leg", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
    });
  }
}
interface OnInit {
  ngOnInit(): void
}