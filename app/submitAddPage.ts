import { Component } from '@angular/core';
@Component({
  template: `
    <h2>Your Add Submit Page</h2>
   
 <input type="file"  #n/>
<img src="images/umr.png" />
<button (click)="type(n)">Type</button>
`})
export class AddSubmitComponent { 
  type(n){
    console.log(n);
  }
}
