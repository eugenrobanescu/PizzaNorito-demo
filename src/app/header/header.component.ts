import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ChangeParamsService } from '../change-params.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems = [];
  quantityItems = 0;
  totalPrice = 0;
  constructor(private changeParam: ChangeParamsService) {}

  ngOnInit(): void {
    $(window).resize(() => {
      if (window.innerWidth >= 768) {
        $('ul.list-group').css('display', 'flex');
      } else {
        $('ul.list-group').css('display', 'none');
      }
    });
    this.onUpdateCart();
    this.changeParam.getUpdateDataCart().subscribe(() => {
      this.onUpdateCart();
    });
  }

  onUpdateCart() {
    var a = JSON.parse(localStorage.getItem('userCart'));
    if (a) {
      this.totalPrice = 0;
      this.quantityItems = 0;
      this.cartItems = a;
      this.cartItems.forEach((el) => {
        this.totalPrice += el.itemPrice * el.quantity;
        this.quantityItems += el.quantity;
      });
    }
  }
  onChangeParams(id) {
    this.changeParam.emitParamChangeEvent(id);
  }
  toggleMenu() {
    $('.list-group').fadeToggle(300);
  }
  fadeOut() {
    if (window.innerWidth <= 768) {
      $('.list-group').fadeOut(300);
    }
  }
}
