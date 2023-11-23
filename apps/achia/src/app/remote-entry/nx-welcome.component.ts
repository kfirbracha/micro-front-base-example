import { InputService } from '@angular-monorepo/library';
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>achia</h1>
    <button (click)="increment()">Increment</button>
    <div>count is : {{ count | async }}</div> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  countService = inject(InputService);

  count = this.countService.currentCount;

  increment() {
    this.countService.increment();
  }
}
