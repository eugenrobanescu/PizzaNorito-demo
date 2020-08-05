import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizare-comanda',
  templateUrl: './finalizare-comanda.component.html',
  styleUrls: ['./finalizare-comanda.component.css'],
})
export class FinalizareComandaComponent implements OnInit {
  items;
  finalPrice;
  send;

  constructor() {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.finalPrice = 0;
    this.items = JSON.parse(localStorage.getItem('userCart'));
    this.items.forEach((el) => {
      this.finalPrice += el.itemPrice * el.quantity;
    });
  }

  onSubmit(form) {
    this.send = true;
  }
}
