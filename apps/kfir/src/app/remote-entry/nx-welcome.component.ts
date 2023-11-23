import { InputService } from '@angular-monorepo/library';
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<h1>Kfir</h1>
    <button (click)="increment()">Increment</button>
    <div>count is : {{ count | async }}</div>
    <a [routerLink]="['/achia']" routerLinkActive="router-link-active"
      >navigate to chia
    </a> `,
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
