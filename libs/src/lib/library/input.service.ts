import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private count = new BehaviorSubject<number>(0);
  constructor() {}

  increment() {
    this.count.next(this.count.value + 1);
  }

  get currentCount(): Observable<number> {
    return this.count;
  }
}
