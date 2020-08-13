import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 [style.font-size.px] = "size">Hey {{title}} </h1>
            <div>
              <button (click) = "decrease()" title = "smaller">-</button>
              <button (click) = "increase()" title = "bigger">+</button>
              <label [style.font-size.px] = "size">FontSize: {{size}} px </label>
            </div>
            `,
  styles: ['h1 { font-weight: normal; }']
})
export class AppComponent {
  title = 'Mano';
  @Input()  size: number | string = 10;
  @Output() sizeChange = new EventEmitter<number>();
  decrease() {
    this.resize(-1);
  }
  increase() {
    this.resize(1);
  }
  in() {
    console.log("Invoking in ");
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
