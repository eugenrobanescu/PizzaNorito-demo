import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { ChangeParamsService } from 'src/app/change-params.service';

@Component({
  selector: 'app-food-template',
  templateUrl: './food-template.component.html',
  styleUrls: ['./food-template.component.css'],
})
export class FoodTemplateComponent implements OnInit {
  @Input() food;

  constructor(private changeParam: ChangeParamsService) {}

  ngOnInit(): void {}
  plusAmount() {
    const theTarget = event.target;
    const amountInput = $(event.target).parent().find('input');
    amountInput.val(+amountInput.val() + 1);
  }
  minusAmount() {
    const theTarget = event.target;
    const amountInput = $(event.target).parent().find('input');
    if (amountInput.val() > 1) {
      amountInput.val(+amountInput.val() - 1);
    }
  }

  addToCart() {
    const item = {
      itemType: $(this)[0].food.type,
      itemImg: $(this)[0].food.img,
      itemName: $(this)[0].food.foodName,
      itemPrice: $(this)[0].food.price,
      quantity: +$(event.target).parent().parent().find('input').val(),
    };
    var a = [];
    var b = JSON.parse(localStorage.getItem('userCart'));
    var c;
    var exists;
    if (b && b.length > 0) {
      c = b.map((el) => {
        if (el.itemName == item.itemName) {
          el.quantity = el.quantity + item.quantity;
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

      if (exists) {
        a.push(...c);
      } else {
        a.push(...c);
        a.push(item);
      }
    } else {
      a.push(item);
    }

    localStorage.setItem('userCart', JSON.stringify(a));
    this.changeParam.cartChange.emit();
  }
}
