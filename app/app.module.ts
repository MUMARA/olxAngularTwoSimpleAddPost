import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }         from './app.component';
import { AddSubmitComponent } from './submitAddPage';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'AddSubmitComponent', component: AddSubmitComponent }
    ])
  ],
  declarations: [
    AppComponent,
    AddSubmitComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
