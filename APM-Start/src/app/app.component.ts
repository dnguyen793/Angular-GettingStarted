import { Component } from '@angular/core';
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>You got this</div>
  </div>`
})
export class AppComponent {
  pageTitle: string = "Duy Duy Duy";
}