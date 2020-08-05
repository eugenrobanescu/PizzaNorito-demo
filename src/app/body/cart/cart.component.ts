import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ChangeParamsService } from 'src/app/change-params.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;

  finalPrice;
  constructor(private changeParam: ChangeParamsService) {}

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

  addToCart(i) {
    const item = {
      itemName: $(this)[0].items[i].itemName,

      quantity: +$(event.target).val(),
    };

    var a = [];
    var b = JSON.parse(localStorage.getItem('userCart'));
    var c;
    var exists;
    if (b && b.length > 0) {
      c = b.map((el) => {
        if (el.itemName == item.itemName) {
          el.quantity = item.quantity;
        }
        return el;
      });
      for (let el of b) {
        if (el.itemName == item.itemName) {
          exists = true;
          break;
        } else {
          exists = false;
        }
      }

      a.push(...c);

      localStorage.setItem('userCart', JSON.stringify(a));
      this.changeParam.cartChange.emit();

      this.getItems();
    }
  }

  deleteItem(i) {
    const item = $(this)[0].items[i].itemName;
    var a = [];
    var b = JSON.parse(localStorage.getItem('userCart'));
    a = b.filter((el) => {
      if (el.itemName !== item) {
        return el;
      }
    });
    localStorage.setItem('userCart', JSON.stringify(a));
    this.changeParam.cartChange.emit();

    this.getItems();
  }
}
