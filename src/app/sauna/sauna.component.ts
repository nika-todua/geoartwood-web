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
      img_big: 'https://i0.wp.com/bouw.ru/userfiles/229_image011.jpg',
      price: '₾ 150,000'
    },
    {
      img_big: 'https://mysaunaworld.com/cdn/shop/products/BarrelInterior_600x.png?v=1699338618',
      price: '₾ 350,000'
    },
    {
      img_big: 'https://i.pinimg.com/736x/34/21/74/342174f828617a2d804c626e4024f978.jpg',
      price: '₾ 350,000'
    },
    {
      img_big: 'https://i.pinimg.com/736x/87/3f/c3/873fc352855e29b257275cd7e1349650.jpg',
      price: '₾ 350,000'
    },
    {
      img_big: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVWRM0mWY7PUj45blhWUe-lAl37nfC1ct4BK-v-CPIxoPiHEWSC8OBS98OAH38uini2M&usqp=CAU',
      price: '₾ 350,000'
    },
    {
      img_big: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8jXvOCi3iReaywZd1Vqbz-3-fEr2nr-vF7tDioHVphqVgh7n2onKPyWvJ7-WYX4loW4&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8jXvOCi3iReaywZd1Vqbz-3-fEr2nr-vF7tDioHVphqVgh7n2onKPyWvJ7-WYX4loW4&usqp=CAU',
      price: '₾ 350,000'
    },
    {
      img_big: 'https://nativesauna.com/cdn/shop/files/auroom-baia-diy-sauna-kit-interior-2.jpg?v=1694401322&width=540',
      price: '₾ 350,000'
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