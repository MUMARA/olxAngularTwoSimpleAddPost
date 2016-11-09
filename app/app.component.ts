import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="AddSubmitComponent" routerLinkActive="active">Add submit page
     
      </a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
