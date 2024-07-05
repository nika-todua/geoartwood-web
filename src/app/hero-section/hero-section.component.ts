import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  
  herosecimgArr = [
    {
      img: '../../../assets/img/sauna/sauna1.jpeg',
      class: 'active',
      alt: 'Image 1'
    },
    {
      img: '../../../assets/img/sauna/sauna8.jpeg',
      class: '',
      alt: 'Image 2'
    },
    {
      img: '../../../assets/img/sauna/sauna14.jpeg',
      class: '',
      alt: 'Image 3'
    },
    {
      img: '../../../assets/img/sauna/sauna4.jpeg',
      class: '',
      alt: 'Image 4'
    },
    {
      img: '../../../assets/img/kotejebi/u4YOdnFmSAW3fykeggTtjvZb8q1Zs5AczOC2MhFB.jpg',
      class: '',
      alt: 'Image 5'
    },
    {
      img: '../../../assets/img/sauna/sauna10.jpeg',
      class: '',
      alt: 'Image 6'
    },
    {
      img: '../../../assets/img/sauna/sauna2.jpeg',
      class: '',
      alt: 'Image 7'
    }
  ]

}