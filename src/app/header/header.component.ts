import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {
  toggleactiveclass:string = '';
  navactive:string = '';

  toggleMenu() {
    if(this.toggleactiveclass == ""){
      this.toggleactiveclass = "active";
      this.navactive = "nav-active";
      document.querySelector("body")?.classList.add("no-scroll")
    } else{
      document.querySelector("body")?.classList.remove("no-scroll")
      this.toggleactiveclass = "";
      this.navactive = "";
    }    
  }
  

  homelink(){
    window.scrollTo({top: 0, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
  aboutlink(){
    window.scrollTo({top: 700, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
  
  cotagelink(){
    window.scrollTo({top: 1300, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
  contactlink(){
    window.scrollTo({top: 2900, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
  

  // mobile
  mobaboutlink(){
    window.scrollTo({top: 500, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
  mobcotagelink(){
    window.scrollTo({top: 1350, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
  mobcontactlink(){
    window.scrollTo({top: 2550, behavior: 'smooth' });
    document.querySelector("body")?.classList.remove("no-scroll")
    this.toggleactiveclass = "";
    this.navactive = "";
  }
}