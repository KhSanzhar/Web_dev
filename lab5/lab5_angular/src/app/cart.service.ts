import {HttpClient} from '@angular/common/http';
import {Product} from '../app/products'
import {Injectable} from '@angular/core';

/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  /* . . . */
}
