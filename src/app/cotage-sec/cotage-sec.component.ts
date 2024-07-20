import { Component } from '@angular/core';

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

    window.addEventListener("resize", () => {
      this.caruselviwes()
    })
    window.addEventListener("DOMContentLoaded", () => {
      this.caruselviwes()
    })
    
  }
  
  caruselviwes(){
    if(window.innerWidth >= 480){
      document.querySelector("swiper-container")!.setAttribute('slides-per-view', '2');
      document.querySelector("swiper-container")!.setAttribute('space-between', '12.5');
    }
    if(window.innerWidth >= 600){
      document.querySelector("swiper-container")!.setAttribute('slides-per-view', '2');
      document.querySelector("swiper-container")!.setAttribute('space-between', '15');
    }
    if(window.innerWidth >= 810){
      document.querySelector("swiper-container")!.setAttribute('slides-per-view', '3');
      document.querySelector("swiper-container")!.setAttribute('space-between', '25');
    }
    if(window.innerWidth >= 1200){
      document.querySelector("swiper-container")!.setAttribute('slides-per-view', '4');
      document.querySelector("swiper-container")!.setAttribute('space-between', '25');
    }
    if(window.innerWidth < 480){
      document.querySelector("swiper-container")!.setAttribute('slides-per-view', '1');
      document.querySelector("swiper-container")!.setAttribute('space-between', '12.5');
    }
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