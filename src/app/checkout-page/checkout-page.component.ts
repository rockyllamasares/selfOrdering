import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Order } from '../shared/model/Order';
import { Cart } from '../shared/model/Cart';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  cart: Cart = new Cart();

  constructor(
    cartService: CartService,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {}

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      //ToastrService value to (any)
      return;
    }
    console.log(this.order);
  }

  onSubmit() {
    this.http
      .put(
        'https://jollibee-database-system-default-rtdb.firebaseio.com/order.json',
        this.order
      )
      .subscribe((res) => {
        console.log(res);
        //this.cart.reset();
        this.router.navigate(['/page'], {relativeTo: this.activatedRoute}); //(onSubmit) button navigate to page.component [include the line 19,20,21]
      });

      this.cart = new Cart();
    return this.cart;
  }
}
