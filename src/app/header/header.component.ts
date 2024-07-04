import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleactiveclass:string = '';
  navactive:string = '';

  toggleMenu() {
    if(this.toggleactiveclass == ""){
      this.toggleactiveclass = "active";
      this.navactive = "nav-active";
    } else{
      this.toggleactiveclass = "";
      this.navactive = "";
    }
  }
  
  
}
