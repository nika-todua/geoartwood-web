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
      img_big: 'https://ecowood.ge/wp-content/uploads/2020/03/saxli5.jpg',
      title: 'Premium Cottage',
      price: '₾ 250,000',
      bedrooms: 4,
      bathrooms: 2,
      area: 350
    },
    {
      img_big: 'https://ecowood.ge/wp-content/uploads/2020/03/saxli5.jpg',
      title: 'Premium Cottage',
      price: '₾ 250,000',
      bedrooms: 4,
      bathrooms: 2,
      area: 350
    },
    {
      img_big: 'https://ecowood.ge/wp-content/uploads/2020/03/saxli5.jpg',
      title: 'Premium Cottage',
      price: '₾ 250,000',
      bedrooms: 4,
      bathrooms: 2,
      area: 350
    },
    {
      img_big: 'https://ecowood.ge/wp-content/uploads/2020/03/saxli5.jpg',
      title: 'Premium Cottage',
      price: '₾ 250,000',
      bedrooms: 4,
      bathrooms: 2,
      area: 350
    },
    {
      img_big: 'https://ecowood.ge/wp-content/uploads/2020/03/saxli5.jpg',
      title: 'Premium Cottage',
      price: '₾ 250,000',
      bedrooms: 4,
      bathrooms: 2,
      area: 350
    },
    {
      img_big: 'https://ecowood.ge/wp-content/uploads/2020/03/saxli5.jpg',
      title: 'Premium Cottage',
      price: '₾ 250,000',
      bedrooms: 4,
      bathrooms: 2,
      area: 350
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
        },
      },
    });
  }
}
interface OnInit {
  ngOnInit(): void
  }