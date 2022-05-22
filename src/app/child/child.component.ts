import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <Strong>Step 2-</Strong>
  <p> Data recevied from the parent AppComponent to child ChildComponet -->count={{count}}</p>
  <Strong>Step 3-</Strong>
  <p> Click this button to increment the count: <button (click)='increment()'>Count++</button><br/>
   Click this button to decrement the count: <button (click)='decrement()'>Count--</button></p>
  `
})
export class ChildComponent {
  @Input() count!: number;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
    console.log("count++ in ChildComponent..." + this.count + "- sending to AppComponent");
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
    console.log("count-- in ChildComponent..." + this.count + "- sending to AppComponent");
  }
}
