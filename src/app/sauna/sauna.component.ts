import Swiper from 'swiper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sauna',
  templateUrl: './sauna.component.html',
  styleUrl: './sauna.component.scss'
})
export class SaunaComponent {
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
    
    this.shuffle(this.saunacaruselarr);

    var swiper = new Swiper(".mySwiper", {
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

  saunacaruselarr = [
    {
      img_big: '../../../assets/img/sauna/sauna1.jpeg',
      imgalt: 'sauna 1'
    },
    {
      img_big: '../../../assets/img/sauna/sauna2.jpeg',
      imgalt: 'sauna 2'
    },
    {
      img_big: '../../../assets/img/sauna/sauna3.jpeg',
      imgalt: 'sauna 3'
    },
    {
      img_big: '../../../assets/img/sauna/sauna4.jpeg',
      imgalt: 'sauna 4'
    },
    {
      img_big: '../../../assets/img/sauna/sauna5.jpeg',
      imgalt: 'sauna 5'
    },
    {
      img_big: '../../../assets/img/sauna/sauna6.jpeg',
      imgalt: 'sauna 6'
    },
    {
      img_big: '../../../assets/img/sauna/sauna7.jpeg',
      imgalt: 'sauna 7'
    },
    {
      img_big: '../../../assets/img/sauna/sauna8.jpeg',
      imgalt: 'sauna 8'
    },
    {
      img_big: '../../../assets/img/sauna/sauna9.jpeg',
      imgalt: 'sauna 9'
    },
    {
      img_big: '../../../assets/img/sauna/sauna10.jpeg',
      imgalt: 'sauna 10'
    },
    {
      img_big: '../../../assets/img/sauna/sauna11.jpeg',
      imgalt: 'sauna 11'
    },
    {
      img_big: '../../../assets/img/sauna/sauna12.jpeg',
      imgalt: 'sauna 12'
    },
    {
      img_big: '../../../assets/img/sauna/sauna13.jpeg',
      imgalt: 'sauna 13'
    },
    {
      img_big: '../../../assets/img/sauna/sauna14.jpeg',
      imgalt: 'sauna 14'
    },
    {
      img_big: '../../../assets/img/sauna/sauna15.jpeg',
      imgalt: 'sauna 15'
    },
    {
      img_big: '../../../assets/img/sauna/sauna16.jpeg',
      imgalt: 'sauna 16'
    },
    {
      img_big: '../../../assets/img/sauna/sauna17.jpeg',
      imgalt: 'sauna 17'
    },
    {
      img_big: '../../../assets/img/sauna/sauna18.jpg',
      imgalt: 'sauna 18'
    }
  ]
}
interface OnInit {
  ngOnInit(): void
}