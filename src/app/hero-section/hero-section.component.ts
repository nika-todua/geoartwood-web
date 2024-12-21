import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    standalone: false
})
export class HeroSectionComponent {
  herosecimgArr = [
    {
      img: '../../../assets/img/sauna/sauna1.jpeg',
      class: '',
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
    },
    {
      img: '../../../assets/img/kotejebi/koteji2.webp',
      class: '',
      alt: 'Image 9'
    },
    {
      img: '../../../assets/img/sauna/sauna17.jpeg',
      class: '',
      alt: 'Image 10'
    }
  ];

  randnum:number = Math.floor(Math.random() * (this.herosecimgArr.length - 0) + 0)
  
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
    this.shuffle(this.herosecimgArr);
    this.herosecimgArr[this.randnum].class = "active";
  }

}