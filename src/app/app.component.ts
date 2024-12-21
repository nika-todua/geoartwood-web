import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'geoartwood';

  constructor(private titleService: Title, private metaTagService: Meta,){}

   // seo texts
   description:string = "todwood | 25 წლიანი გამოცდილება, საქმეს ვეკიდებით სრული პროფესიონალიზმით. გვაქვს ბევრი წარმატებული პროექტი შესრულებული. ჩვენთან კმაყოფილი დარჩებით..."
   seokeiwords:string = "Todwood, todwood, კოტეჯი, საუნა, საუნის დამზადება, ხის კოტეჯის გაკეტება, დამზადება, გაკეთება, ხის ნაკეთობები, საუნა, კოტეჯები, საუკეთესო საუნები, საუკეთესო ფინური მშრალი საუნები"
   seoimg:string = "https://todwoodgeo.netlify.app/assets/img/personal.webp";
   seolink:string = "https://todwoodgeo.netlify.app/"


  ngOnInit(){
    this.titleService.setTitle("Todwood | საუნა და ხის კოტეჯი");
    this.metaTagService.addTags([
      {name: 'description', content: this.description},
      {name: 'keywords', content: this.seokeiwords},
      {name: 'author', content: 'Zaza Todua'},
      {name: 'image', content: this.seoimg},
      {name: 'og:title', content: 'Todwood | საუნა და ხის კოტეჯი'},
      {name: 'og:description', content: this.description },
      {name: 'og:url', content: this.seolink},
      {name: 'og:type', content: 'website'},
      {name: 'og:image', content: this.seoimg},
      {name: 'og:image:alt', content: 'Zaza Todua'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:description', content: this.description},
      {name: 'twitter:url', content: this.seolink},
      {name: 'twitter:image', content: this.seoimg},
      {name: 'robots', content: 'follow, nofollow'},
      {name: 'googlebot', content: 'follow, nofollow'},
      {name: 'googlebot-news', content: 'follow, nofollow'}
    ]);
  }


}
interface OnInit {
  ngOnInit(): void;
}