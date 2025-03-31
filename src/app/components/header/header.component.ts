import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = ["Personas", "Negocios", "Corporativos", "Negocios Especializados", "Tu 360", "Blog"]
}
