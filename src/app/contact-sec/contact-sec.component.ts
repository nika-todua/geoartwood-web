import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-sec',
  templateUrl: './contact-sec.component.html',
  styleUrl: './contact-sec.component.scss'
})
export class ContactSecComponent {
  mapurl:string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419.57502111380063!2d44.80958693906739!3d41.78952236616651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c4b1ee9dc51%3A0x8835f75e2ab7d363!2zMSDhg5Thg5Xhg5Lhg5Thg5zhg5gg4YOu4YOQ4YOg4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e1!3m2!1ska!2sge!4v1720157296054!5m2!1ska!2sge';
  ngOnInit(){
    document.querySelector("iframe")!.src = this.mapurl
  }
  
}
