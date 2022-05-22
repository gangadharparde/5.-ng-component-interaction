import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <Strong>Step 1-</Strong>
     <h6>@Input Applied on child Component</h6>
     <h6>&lt;app-child [count]='count' (change)= 'countChange($event)'&gt;&lt;/app-child&gt;</h6>
     <app-child [count]='count' (change)= 'countChange($event)'></app-child>
     <Strong>Step 4-</Strong>
     <p>Recevied AppComponent changed count from ChildComponent= {{ count }} </p>
  `
  })
  export class AppComponent {
    count = 9;
    countChange(event: number) {
      this.count = event;
    }
}
