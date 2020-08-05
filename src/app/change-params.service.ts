import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeParamsService {
  paramChange: EventEmitter<number> = new EventEmitter();
  cartChange: EventEmitter<number> = new EventEmitter();
  constructor() {}
  emitParamChangeEvent(id) {
    this.paramChange.emit(id);
  }
  getParamChangeEmitter() {
    return this.paramChange;
  }
  emitUpdateDataCart() {
    this.cartChange.emit();
  }
  getUpdateDataCart() {
    return this.cartChange;
  }
}
