import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-sauna',
  templateUrl: './sauna.component.html',
  styleUrl: './sauna.component.scss'
})
export class SaunaComponent {

  saunacaruselarr = [
    {
      img_big: '../../../assets/img/sauna/sauna1.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna2.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna3.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna4.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna5.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna6.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna7.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna8.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna9.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna10.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna11.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna12.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna13.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna14.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna15.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna16.jpeg'
    },
    {
      img_big: '../../../assets/img/sauna/sauna17.jpeg'
    }
  ]

  
  ngOnInit(){
    var swiper = new Swiper(".sauna-mySwiper-desktop-log", {
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